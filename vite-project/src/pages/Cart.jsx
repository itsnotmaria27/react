import React, { useContext } from 'react';
import { CartContext } from '../components/cartContext';
import ThemeContext from '../components/themeContext';
import "./style.css";

function Cart() {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const total = cartItems.reduce((sum, item) => sum + parseFloat(item.price) * item.quantity, 0);

  return (
    <div className="page-container">
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>Пока корзина пуста.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>{item.price} x {item.quantity}</p>
              <div className="quantity-controls">
                <button  className = "secondary" onClick={() => decreaseQuantity(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button className = "secondary" onClick={() => increaseQuantity(item.id)}>+</button>
              </div>
              <button onClick={() => removeFromCart(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
      <h2>Total: {total.toFixed(2)} rub.</h2>
      <div className="theme-toggle">
        <h2>Current theme: {theme}</h2>
        <button onClick={toggleTheme}>Change theme</button>
      </div>
    </div>
  );
}

export default Cart;