import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import Food from './Components/Food'
import Cart from './Components/Cart'
import Navbar from './navbar'
import './App.css'
import './navbar.css'
import { Foods } from './Helpers/context'

function App() {
  const [game, setGame]=useState('main')
  const [cart, setCart]=useState([])

  return (
    <>
     <Navbar/>
        <Foods.Provider value={{game, setGame,cart, setCart}}>
        {game==='main'&& <Food/>}
        {game==='cart'&& <Cart/>}
        </Foods.Provider>
        
    </>
  )
}

export default App
