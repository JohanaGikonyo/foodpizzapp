import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
   // const lines=document.querySelector('.lines');
    //const links=document.querySelector('.links')
   // const linkss=document.querySelectorAll('.links a')
    //lines.addEventListener("click",()=>{
        //links.classList.toggle('open');
        //linkss.forEach(linkss=>{links.classList.toggle('fade')})
        
   // })
   
  return (
    <div>

<nav>
    <h1>Shop with us Pizza</h1>
    <div className='lines'>
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
    </div>
    <div className='links'>
        <Link to='/'>Food</Link>
        <Link to='/cart'>Cart</Link>
    </div>
    </nav>


    </div>
  )
}

export default Navbar