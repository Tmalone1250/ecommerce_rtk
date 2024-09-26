import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromCart, clearCart, increaseItemQuantity, decreaseItemQuantity } from './CartSlice.jsx';
import './ShoppingCart.css'; 

const ShoppingCart = () => {

const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems);
    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const handleRemoveItem = itemId => {
      dispatch(removeItemFromCart(itemId));
    };

    const handleClearCart = () => {
      dispatch(clearCart());
    };

    const handleIncreaseQuantity = itemID => {
      dispatch(increaseItemQuantity(itemId));
    };

    const handleDecreaseQuantity = itemID => {
      dispatch(decreaseItemQuantity(itemID));
    };

  return (
    <>
    <div className="shopping-cart">
      <h2 className="shopping-cart-title">Shopping Cart</h2>
      <ul className="cart-items">
      {cartItems.map(item => (
            <li key={item.id} className="cart-item">
              <span>{item.name} - ${item.price}</span>
              <div className="quantity-controls">
                <button className="quantity-control-btn" onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                <span> {item.quantity}</span>
                <button className="quantity-control-btn" onClick={() => handleIncreaseQuantity(item.id)}>+</button>
              </div>
              <button className="remove-item-btn" onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </li>
          ))}
      </ul>
      <button className="clear-cart-btn" onClick={handleClearCart}>Clear Cart</button>
      <div>{totalAmount ? <div>'The total amount is {totalAmount}</div> : ''}</div>
    </div>
    </>
  );
};

export default ShoppingCart;
