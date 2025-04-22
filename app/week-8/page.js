// /week-8/page.js
"use client";

import React, { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import items from "./items.json";

export default function Page() {
  const [itemsList, setItemsList] = useState(items);
  const [selectedItemName, setSelectedItemName] = useState("");

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

  return (
    <div className="m-5 flex flex-col lg:flex-row gap-8">
      <div className="flex-1">
        <h1 className="text-center text-3xl font-bold mb-8 text-white">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={itemsList} onItemSelect={handleItemSelect} />
      </div>
      <div className="flex-1">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </div>
  );
}