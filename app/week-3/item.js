export default function Item( { name, quantity, category } ) {
    return (
      <section className="bg-slate-600">
        <h1 font-bold text-lg>{name}</h1>
        <p>Buy {quantity} in {category}</p>
      </section>
    );
}