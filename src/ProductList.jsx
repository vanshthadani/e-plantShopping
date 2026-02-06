import React from "react";

const plants = [
  {
    id: 1,
    name: "Snake Plant",
    price: 15,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1587502536263-9298f97c0c5b"
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 18,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b"
  },
  {
    id: 3,
    name: "Aloe Vera",
    price: 12,
    category: "Medicinal Plants",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5"
  }
];

function ProductList() {
  return (
    <div>
      <h1>Our Plants</h1>

      {plants.map((plant) => (
        <div key={plant.id}>
          <h3>{plant.name}</h3>
          <img src={plant.image} alt={plant.name} width="150" />
          <p>Category: {plant.category}</p>
          <p>Price: ${plant.price}</p>
          <button>Add to Cart</button>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default ProductList;
