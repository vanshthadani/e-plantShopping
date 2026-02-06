import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import Navbar from "./Navbar";

const plantData = {
  "Indoor Plants": [
    {
      id: 1,
      name: "Snake Plant",
      price: 15,
      image: "https://via.placeholder.com/150"
    },
    {
      id: 2,
      name: "Peace Lily",
      price: 18,
      image: "https://via.placeholder.com/150"
    }
  ],
  "Outdoor Plants": [
    {
      id: 3,
      name: "Rose Plant",
      price: 20,
      image: "https://via.placeholder.com/150"
    },
    {
      id: 4,
      name: "Tulsi",
      price: 10,
      image: "https://via.placeholder.com/150"
    }
  ],
  "Medicinal Plants": [
    {
      id: 5,
      name: "Aloe Vera",
      price: 12,
      image: "https://via.placeholder.com/150"
    },
    {
      id: 6,
      name: "Mint",
      price: 8,
      image: "https://via.placeholder.com/150"
    }
  ]
};

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [disabledButtons, setDisabledButtons] = useState([]);

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
    setDisabledButtons([...disabledButtons, plant.id]);
  };

  return (
    <>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <h1>Our Plants</h1>

        {Object.keys(plantData).map((category) => (
          <div key={category}>
            <h2>{category}</h2>

            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
              {plantData[category].map((plant) => (
                <div
                  key={plant.id}
                  style={{
                    border: "1px solid #ccc",
 ProductList;
