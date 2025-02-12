import ItemList from "./item-list";

export default function Page() {
    return (
      <main className="bg-black">
        <h1 className="font-bold text-3xl text-slate-200">Shopping List</h1>
        <ItemList />
      </main>
    );
  }