// CartPage.js
import React from 'react';

const CartPage = ({ cart, removeFromCart }) => {
    return (
        <div>
            <h2>Cart</h2>
            <ul>
                {cart && cart.length > 0 ? (
                    cart.map((item, index) => (
                        <li key={index}>
                            <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px' }} />
                            {item.name} - ${item.price}
                            <button onClick={() => removeFromCart(index)}>Remove</button>
                        </li>
                    ))
                ) : (
                    <li>No items in cart</li>
                )}
            </ul>
        </div>
    );
};

export default CartPage;
