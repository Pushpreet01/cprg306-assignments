import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, deleteDoc, doc, query } from "firebase/firestore";

export async function getItems(userId) {
  try {
    const itemsCollection = collection(db, `users/${userId}/items`);
    const itemsSnapshot = await getDocs(query(itemsCollection));
    const items = itemsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return items;
  } catch (error) {
    console.error("Error getting items:", error);
    return [];
  }
}

export async function addItem(userId, item) {
  try {
    const itemsCollection = collection(db, `users/${userId}/items`);
    const docRef = await addDoc(itemsCollection, item);
    return docRef.id;
  } catch (error) {
    console.error("Error adding item:", error);
    throw error;
  }
}

export async function deleteItem(userId, itemId) {
  try {
    const itemDoc = doc(db, `users/${userId}/items/${itemId}`);
    await deleteDoc(itemDoc);
  } catch (error) {
    console.error("Error deleting item:", error);
    throw error;
  }
}