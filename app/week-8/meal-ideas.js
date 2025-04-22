"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error("Error fetching meal ideas:", error);
    return [];
  }
}

async function fetchMealDetails(mealId) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    );
    const data = await response.json();
    const meal = data.meals ? data.meals[0] : null;
    if (!meal) return null;

    // Extract ingredients (up to 20 as per TheMealDB structure)
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient && ingredient.trim()) {
        ingredients.push(`${measure ? measure + " " : ""}${ingredient}`);
      }
    }
    return { idMeal: meal.idMeal, strMeal: meal.strMeal, strMealThumb: meal.strMealThumb, ingredients };
  } catch (error) {
    console.error("Error fetching meal details:", error);
    return null;
  }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [expandedMealId, setExpandedMealId] = useState(null);

  async function loadMealIdeas() {
    if (ingredient) {
      const mealIdeas = await fetchMealIdeas(ingredient);
      // Fetch details for each meal
      const detailedMeals = await Promise.all(
        mealIdeas.map(async (meal) => await fetchMealDetails(meal.idMeal))
      );
      setMeals(detailedMeals.filter((meal) => meal !== null));
    } else {
      setMeals([]);
    }
  }

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  const toggleMeal = (mealId) => {
    setExpandedMealId(expandedMealId === mealId ? null : mealId);
  };

  return (
    <div className="p-4 bg-slate-700 shadow rounded-xl">
      <h2 className="text-2xl font-bold text-white mb-4">Meal Ideas</h2>
      {ingredient ? (
        meals.length > 0 ? (
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {meals.map((meal) => (
              <li
                key={meal.idMeal}
                className="bg-blue-100 p-3 rounded-lg cursor-pointer hover:scale-105 hover:shadow-lg transition-transform duration-200"
                onClick={() => toggleMeal(meal.idMeal)}
              >
                <p className="text-gray-700 font-bold">{meal.strMeal}</p>
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="w-24 h-24 mt-2 rounded"
                />
                {expandedMealId === meal.idMeal && (
                  <div className="mt-2">
                    <p className="text-gray-700 font-semibold">Ingredients:</p>
                    <ul className="list-disc pl-5 text-gray-700">
                      {meal.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-white">No meal ideas found for {ingredient}.</p>
        )
      ) : (
        <p className="text-white">Select an item to see meal ideas.</p>
      )}
    </div>
  );
}