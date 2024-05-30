import { useState } from 'react'
import ShoeList from './components/shoeList';
import Cart from './components/cart';
import shoes from './data/shoes';
import './App.css'

function App() {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (shoe) => {
    setCartItems(prevItems => {
      const itemInCart = prevItems.find(item => item.id === shoe.id)
      if (itemInCart) {
        return prevItems.map(item =>
          item.id === shoe.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      } else {
        return [...prevItems, { ...shoe, quantity: 1 }]
      }
    })
  }

  const removeFromCart = (id) => {
    setCartItems(prevItems =>
      prevItems.map(item => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item))
        .filter(item => item.quantity > 0)
    )
  }

  return (
    <>
      <div className='app'>
        <ShoeList shoes={shoes} addToCart={addToCart} />
        <Cart cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart} />
      </div>
    </>
  )
}

export default App
