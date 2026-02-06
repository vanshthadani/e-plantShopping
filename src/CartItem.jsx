import React from "react";
import { useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart
} from "../redux/CartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  // Calculate total cost for this item
  const itemTotalCost = item.price * item.quantity;

  const handleIncrease = () => {
    dispatch(increaseQuantity(item.id));
  };

  const handleDecrease = () => {
    dispatch(decreaseQuantity(item.id));
  };

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
        borderBottom: "1px solid #ccc",
        padding: "15px 0"
      }}
    >
      <img
        src
 CartItem;


export default CartItem;


