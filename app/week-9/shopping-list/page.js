"use client";

import React, { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/navigation";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import items from "./items.json";

export default function Page() {
  const { user, firebaseSignOut } = useUserAuth();
  const router = useRouter();
  const [itemsList, setItemsList] = useState(items);
  const [selectedItemName, setSelectedItemName] = useState("");

  useEffect(() => {
    console.log("Shopping list page: user status:", user);
    if (!user) {
      console.log("No user, redirecting to /");
      router.push("/");
    }
  }, [user, router]);

  const handleAddItem = (item) => {
    setItemsList([...itemsList, item]);
  };

  const handleItemSelect = (item) => {
    // Clean up item name (remove size, emojis, etc.)
    let cleanedName = item.name
      .split(",")[0] // Remove size (e.g., "1 kg")
      .trim() // Remove extra spaces
      .replace(/[\u{1F300}-\u{1F9FF}]/gu, ""); // Remove emojis
    setSelectedItemName(cleanedName);
  };

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
      console.log("Sign-out successful, redirecting to /");
      router.push("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="p-8 bg-slate-700 shadow rounded-xl text-center">
          <p className="text-white">Please sign in to access the shopping list.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="m-5 flex flex-col lg:flex-row gap-8">
      <div className="flex-1">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-center text-3xl font-bold text-white">Shopping List</h1>
          <button
            onClick={handleSignOut}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl"
          >
            Sign Out
          </button>
        </div>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={itemsList} onItemSelect={handleItemSelect} />
      </div>
      <div className="flex-1">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </div>
  );
}