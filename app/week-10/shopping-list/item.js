export default function Item({ name, quantity, category, onSelect, onDelete, id }) {
  return (
    <div
      className="p-4 bg-blue-100 shadow rounded-lg cursor-pointer hover:scale-105 hover:shadow-lg transition-transform duration-200"
      onClick={() => onSelect({ name, quantity, category })}
    >
      <h1 className="text-gray-700 text-lg font-bold">{name}</h1>
      <h2 className="text-gray-700">Buy {quantity} in {category}</h2>
      <button
        onClick={(e) => {
          e.stopPropagation(); // Prevent triggering onSelect
          onDelete(id);
        }}
        className="mt-2 px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded-lg"
      >
        Delete
      </button>
    </div>
  );
}