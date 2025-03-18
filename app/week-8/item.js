import MealIdeas from "./meal-ideas";

export default function Item({ name, quantity, category }) {
    return (
      <button onClick={() => MealIdeas(name.substring(0, length - 1))}>
        <div className="p-4 bg-blue-100 shadow rounded-lg">
          <h1 className="text-gray-700 text-lg font-bold">{name}</h1>
          <h2 className="text-gray-700">Buy {quantity} in {category}</h2>
        </div>
      </button>
    );
  }