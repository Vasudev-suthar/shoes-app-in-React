// components/Cart.js
import React from 'react';

const Cart = ({ cartItems, addToCart, removeFromCart }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <div className='text-box-cart'>
        <h2>Cart</h2>
        {cartItems.length === 0 ? (
          <p></p>
        ) : (
          cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <div className='cart-img-box'>
                <img src={item.image} alt={item.name} className="cart-item-image" />
              </div>
              <div className='side-box-item-cart'>
                <h3>{item.name}</h3>
                <div className='box-price-button'>
                  <p>${item.price}</p>
                  <div className="cart-item-controls">
                    <button id='minus-btn' onClick={() => removeFromCart(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button id='plus-btn' onClick={() => addToCart(item)}>+</button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
        <h3>Total: ${total.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default Cart;

