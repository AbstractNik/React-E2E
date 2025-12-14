import Pizza from './Pizza.jsx'


function Menu({pizzaData}) {

    const numPizzas = pizzaData.length;
    return (
      <>
        <h2>Our Menu</h2>
        {numPizzas>0 ? <ul className="pizzas">
      {pizzaData.map(pizza => (
        <Pizza 
          key={pizza.name} 
          pizzaObject={pizza} 
        />
      ))}
    </ul>:<p>We are still working on our menu , Please come back later</p>}
        
        {/* <Pizza name={pizzaData[0].name} ingredients={pizzaData[0].ingredients} price={pizzaData[0].price} image={pizzaData[0].photoName} />
        <Pizza name={pizzaData[1].name} ingredients={pizzaData[1].ingredients} price={pizzaData[1].price} image={pizzaData[1].photoName}/>
        <Pizza name={pizzaData[2].name} ingredients={pizzaData[2].ingredients} price={pizzaData[2].price} image={pizzaData[2].photoName}/> */}
        
      </>
    );
  }
  
  export default Menu;