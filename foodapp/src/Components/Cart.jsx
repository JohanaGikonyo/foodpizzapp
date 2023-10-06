import  { useContext } from 'react'
import { Foods } from '../Helpers/context'
import { useState } from 'react';
//const {}=useContext(Foods)

function Cart() {
  const {cart,game, setGame}=useContext(Foods)
  const [cartState, setCart] = useState(cart); // Define cart state
  //const [totalCost, setTotalCost] = useState(calculateTotalCost());
  const calculateTotalCost = () => {
    return cart.reduce((total, item) => total + item.cost * item.quantity, 0);
  };
  const removeItemFromCart = (index) => {
    const updatedCart = [...cartState];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    //setTotalCost(calculateTotalCost());
  };
  return (
    
    <div>
  <h2>Cart</h2>
  <ul>
    {cart.map((item, index) => (
      <li key={index} style={{listStyle:'none'}}>
        {item.name} - Quantity: {item.quantity} - Cost: {item.cost}
        <button onClick={() => removeItemFromCart(index)}>Remove</button>
      </li>
    ))}
  </ul>
  <p>Total Cost: {calculateTotalCost()}</p>
  
    <button onClick={()=>setGame('main')}>Back</button>
    </div>
  )
}

export default Cart