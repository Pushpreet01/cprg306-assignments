export default function Item( { name, quantity, category } ) {
    return (
      <section className="m-3 p-2 bg-slate-800 text-slate-200">
        <h1 className="font-bold text-lg">{name}</h1>
        <p className="">Buy {quantity} in {category}</p>
      </section>
    );
}