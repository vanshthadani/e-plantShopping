import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        padding: "10px",
        borderBottom: "1px solid #ccc",
        display: "flex",
        justifyContent: "space-between"
      }}
    >
      <h2>Paradise Nursery</h2>

      <div>
        <Link to="/products" style={{ marginRight: "15px" }}>
          Products
        </Link>
        <Link to="/cart">Cart</Link>
      </div>
    </nav>
  );
}

export default Navbar;
