import React from "react";

function CartItem({ item }) {
  return (
    <div style={{ borderBottom: "1px solid #ccc", padding: "10px 0" }}>
      <h3>{item.name}</h3>
      <p>Price: ${item.price}</p>
      <p>Quantity: {item.quantity}</p>

      <div>
        <button>-</button>
        <button>+</button>
        <button>Remove</button>
      </div>
    </div>
  );
}

export default CartItem;


export default CartItem;


