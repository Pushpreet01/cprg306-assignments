"use client";

import { useState } from "react";

export default function NewItem() {

    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <section className="flex m-3 p-2 justify-center bg-slate-800">
            <p className="p-2 mr-5">{quantity}</p>
            <button onClick={decrement} disabled={quantity === 1} className="m-1 my-2 px-4 bg-blue-600 rounded-lg
             hover:bg-blue-400 disabled:bg-slate-400">-</button>
            <button onClick={increment} disabled={quantity === 20} className="m-1 my-2 px-4 bg-blue-600 rounded-lg
             hover:bg-blue-400 disabled:bg-slate-400">+</button>
        </section>
    );
}