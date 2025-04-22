export default function Item({ name, quantity, category, onSelect }) {
  return (
    <div
      className="p-4 bg-blue-100 shadow rounded-lg cursor-pointer hover:scale-105 hover:shadow-lg transition-transform duration-200"
      onClick={() => onSelect({ name, quantity, category })}
    >
      <h1 className="text-gray-700 text-lg font-bold">{name}</h1>
      <h2 className="text-gray-700">Buy {quantity} in {category}</h2>
    </div>
  );
}