"use client";

import React, { useState } from 'react';

function NewItem({ onAddItem }) {
  const [item, setItem] = useState({ name: "", quantity: 1, category: "produce" });
//   const [name, setName] = useState("");
//   const [category, setCategory] = useState("produce");
//   const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setItem((prevItem) => ({ ...prevItem, quantity: Math.min(prevItem.quantity + 1, 20) }));
  };

  const decrement = () => {
    setItem((prevItem) => ({ ...prevItem, quantity: Math.max(prevItem.quantity - 1, 1) }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddItem({ ...item, id: Math.random().toString(36).substr(2, 9) });
    setItem({ name: "", quantity: 1, category: "produce" });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-slate-700 shadow-md rounded-xl">
      <div className="mb-4">
        <input
          placeholder='Item name'
          type="text"
          id="name"
          value={item.name}
          onChange={(e) => setItem({ ...item, name: e.target.value })}
          required
          className="w-full px-3 py-2 border-2 rounded-xl text-gray-800"
        />
      </div>
      <div className="mb-4">
        <div className="flex items-center">
          <section className="flex w-80 px-2 mr-5 justify-center bg-white rounded-xl">
            <p className="p-2 mr-20">{item.quantity}</p>
            <button type="button" onClick={decrement} disabled={item.quantity === 1} className="px-3 my-2 m-0.5 bg-blue-600 rounded-lg
             hover:bg-blue-700 disabled:bg-slate-400">-</button>
            <button type="button" onClick={increment} disabled={item.quantity === 20} className="my-2 px-2.5 m-0.5 bg-blue-600 rounded-lg
             hover:bg-blue-700 disabled:bg-slate-400">+</button>
          </section>

          <select
          id="category"
          value={item.category}
          onChange={(e) => setItem({ ...item, category: e.target.value })}
          className="w-80 px-3 py-2 ml-5 border rounded-xl text-gray-800"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen">Frozen Foods</option>
          <option value="canned">Canned Goods</option>
          <option value="dry">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
        </div>
      </div>
      <button type="submit" className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl">+</button>
    </form>
  );
}

export default NewItem;