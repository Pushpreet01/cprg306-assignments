import ItemList from './item-list';

export default function Page() {
  return (
    <main className="p-8 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-white">Shopping List</h1>
      <ItemList />
    </main>
  );
}