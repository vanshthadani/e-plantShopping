import React from "react";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity
} from "../redux/CartSlice";


function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div style={{ borderBottom: "1px solid #ccc", padding: "10px 0" }}>
      <h3>{item.name}</h3>
      <p>Price: ${item.price}</p>
      <p>Quantity: {item.quantity}</p>

      <div>
  <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
  <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
  <button onClick={() => dispatch(removeFromCart(item.id))}>
    Remove
  </button>
</div>

    </div>
  );
}

export default CartItem;


export default CartItem;


