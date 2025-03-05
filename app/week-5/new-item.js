"use client";

import React, { useState } from 'react';

function NewItem() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity((prevQuantity) => Math.min(prevQuantity + 1, 20));
  };

  const decrement = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const item = { name, quantity, category };
    alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);
    setName("");
    setCategory("produce");
    setQuantity(1);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-slate-700 shadow-md rounded-xl">
      <div className="mb-4">
        <input
          placeholder='Item name'
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-3 py-2 border-2 rounded-xl text-gray-800"
        />
      </div>
      <div className="mb-4">
        <div className="flex items-center">
          <section className="flex w-80 px-2 mr-5 justify-center bg-white rounded-xl">
            <p className="p-2 mr-20">{quantity}</p>
            <button onClick={decrement} disabled={quantity === 1} className="px-3 my-2 m-0.5 bg-blue-600 rounded-lg
             hover:bg-blue-400 disabled:bg-slate-400">-</button>
            <button onClick={increment} disabled={quantity === 20} className="my-2 px-2.5 m-0.5 bg-blue-600 rounded-lg
             hover:bg-blue-400 disabled:bg-slate-400">+</button>
          </section>

          <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
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
      <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white font-bold rounded-xl">+</button>
    </form>
  );
}

export default NewItem;