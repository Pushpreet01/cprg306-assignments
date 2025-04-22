// /week-8/item-list.js
"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div>
      <div className="pt-5 pb-2 flex items-center justify-center">
        <button
          className={`mr-2 py-2 px-4 rounded-xl text-white ${
            sortBy === "name" ? "bg-blue-700" : "bg-blue-600"
          }`}
          onClick={() => setSortBy("name")}
        >
          Sort by Name
        </button>
        <button
          className={`py-2 px-4 rounded-xl text-white ${
            sortBy === "category" ? "bg-blue-700" : "bg-blue-600"
          }`}
          onClick={() => setSortBy("category")}
        >
          Sort by Category
        </button>
      </div>
      <div className="grid gap-2 sm:grid-cols-1 lg:grid-cols-2">
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            onSelect={onItemSelect}
          />
        ))}
      </div>
    </div>
  );
}