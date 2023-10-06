import React, { createContext, useContext } from 'react'
import { Foods } from '../Helpers/context'
import {menu} from '../Helpers/foodobj'
//import {Cart} from './Cart'
function Food() {
   const {game, setGame,cart, setCart}=useContext(Foods)
   const handleOrderClick = (item) => {
    // Check if the item is already in the cart
    const itemIndex = cart.findIndex((cartItem) => cartItem.name === item.name);
  
    if (itemIndex !== -1) {
      // If the item is already in the cart, update its quantity
      const updatedCart = [...cart];
      updatedCart[itemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      // If the item is not in the cart, add it with quantity 1
      const orderedItem = {
        name: item.name,
        quantity: 1,
        cost: item.cost,
      };
      setCart([...cart, orderedItem]);
    }
  };
  
  
  return (
    <>
    <h2 style={{color:'orange',borderRadius:'5px',backgroundColor:'firebrick', width:'50%', textAlign:'center'}}>ORDER YOUR PIZZA ITEM</h2>
    <div className='menus'>
   
    {menu.map((item, index) => (
  <div className='menu2' key={index}>
    <img src={item.image} className='images' alt={`Item ${index}`} /><br />
    <em>
      {" Name : " + item.name}<br />
      {"Cost : " + item.cost}<br />
      Previous Cost : <s>{item.previuscost}</s><br />
      {"Quantity : " + item.remaining}<br />
      <button onClick={() => handleOrderClick(item)}>Order</button><br />
    </em>
  </div>
))}

      <button onClick={()=>setGame("cart")}>cart</button>
    </div>
  
    </>
  )
}

export default Food