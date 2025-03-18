"use client";

import { useState, useEffect } from "react";

export default function MealIdeas(ingredient) {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}");
            const data = await response.json();
            setMeals(data.meals);
        })();
    }, []);

    return (
        <div>
            <h1 className="text-center text-3xl font-bold mb-8 text-white">Meal Ideas</h1>
            <div className="grid gap-2 sm:grid-cols-1 lg:grid-cols-3">
                {meals.map((meal) => (
                    <div key={meal.idMeal} className="p-4 bg-blue-100 shadow rounded-lg">
                        <h1 className="text-gray-700 text-lg font-bold">{meal.strMeal}</h1>
                        <img src={meal.strMealThumb} alt={meal.strMeal} />
                    </div>
                ))}
            </div>
        </div>
    );
}