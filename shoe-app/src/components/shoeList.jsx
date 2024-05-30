
import React from 'react';

const ShoeList = ({ shoes, addToCart }) => {
  return (
    <div className="shoe-list">
      {shoes.map(shoe => (
        <div key={shoe.id} className="shoe-item">
          <div className='img-box'>
          <img src={shoe.image} alt={shoe.name} />
          </div>
          <div className='text-box'>
          <h3 className='h3'>{shoe.name}</h3>
          <p className='price'>${shoe.price}</p>
          <button className='btn' onClick={() => addToCart(shoe)}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShoeList;
