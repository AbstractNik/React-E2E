function Pizza({ pizzaObject }) {

  // if (pizzaObject.soldOut) return null; // don’t render sold-out pizzas
  return (
    <li className={`pizza ${pizzaObject.soldOut ? "sold-out" : ""}`}>
    <img src={`../src/${pizzaObject.photoName}`} alt={pizzaObject.name} />
    <div>
      <h3>{pizzaObject.name}</h3>
      <p>{pizzaObject.ingredients}</p>
      <span>{pizzaObject.soldOut ? "SOLD OUT" :pizzaObject.price} €</span>
    </div>
  </li>
  );
}

export default Pizza;