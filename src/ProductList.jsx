// ProductList.jsx
import React, { useState } from 'react';
import Navbar from './Navbar';
import './ProductList.css';

const ProductList = ({ addToCart }) => {
  // State to track which items have been added to cart
  const [addedItems, setAddedItems] = useState({});

  // Handle add to cart with proper state management
  const handleAddToCart = (plant) => {
    addToCart(plant);
    // Mark this item as added
    setAddedItems({
      ...addedItems,
      [plant.id]: true
    });
    
    // Re-enable button after 2 seconds (optional, can be removed)
    setTimeout(() => {
      setAddedItems({
        ...addedItems,
        [plant.id]: false
      });
    }, 2000);
  };

  // Plant data with at least 6 unique plants per category
  const plantCategories = [
    {
      id: 1,
      name: 'Indoor Plants',
      plants: [
        { id: 101, name: 'Snake Plant', price: 29.99, image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae', description: 'Low maintenance air purifying plant' },
        { id: 102, name: 'Peace Lily', price: 34.99, image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411', description: 'Beautiful flowering indoor plant' },
        { id: 103, name: 'ZZ Plant', price: 39.99, image: 'https://images.unsplash.com/photo-1545241047-6083a3684597', description: 'Drought tolerant and easy to care for' },
        { id: 104, name: 'Pothos', price: 24.99, image: 'https://images.unsplash.com/photo-1598880940080-ff9a29891b85', description: 'Fast growing trailing plant' },
        { id: 105, name: 'Spider Plant', price: 19.99, image: 'https://images.unsplash.com/photo-1545241047-6083a3684597', description: 'Great for beginners, produces babies' },
        { id: 106, name: 'Rubber Plant', price: 44.99, image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411', description: 'Large leaves, tropical appearance' },
        { id: 107, name: 'Chinese Money Plant', price: 32.99, image: 'https://images.unsplash.com/photo-1545241047-6083a3684597', description: 'Unique circular leaves' },
        { id: 108, name: 'Bird\'s Nest Fern', price: 27.99, image: 'https://images.unsplash.com/photo-1598880940080-ff9a29891b85', description: 'Wavy, textured fronds' },
      ]
    },
    {
      id: 2,
      name: 'Outdoor Plants',
      plants: [
        { id: 201, name: 'Lavender', price: 15.99, image: 'https://images.unsplash.com/photo-1595231776515-ddffb5f8b8e3', description: 'Fragrant purple flowering herb' },
        { id: 202, name: 'Rose Bush', price: 49.99, image: 'https://images.unsplash.com/photo-1519378058457-4c29a0a2efac', description: 'Classic flowering shrub' },
        { id: 203, name: 'Boxwood', price: 39.99, image: 'https://images.unsplash.com/photo-1595231776515-ddffb5f8b8e3', description: 'Evergreen hedge plant' },
        { id: 204, name: 'Hydrangea', price: 42.99, image: 'https://images.unsplash.com/photo-1519378058457-4c29a0a2efac', description: 'Large blooming flower clusters' },
        { id: 205, name: 'Japanese Maple', price: 89.99, image: 'https://images.unsplash.com/photo-1595231776515-ddffb5f8b8e3', description: 'Ornamental tree with red leaves' },
        { id: 206, name: 'Hosta', price: 22.99, image: 'https://images.unsplash.com/photo-1519378058457-4c29a0a2efac', description: 'Shade-tolerant foliage plant' },
        { id: 207, name: 'Geranium', price: 18.99, image: 'https://images.unsplash.com/photo-1595231776515-ddffb5f8b8e3', description: 'Colorful flowering annual' },
        { id: 208, name: 'Bamboo', price: 65.99, image: 'https://images.unsplash.com/photo-1519378058457-4c29a0a2efac', description: 'Fast growing screening plant' },
      ]
    },
    {
      id: 3,
      name: 'Succulents',
      plants: [
        { id: 301, name: 'Echeveria', price: 12.99, image: 'https://images.unsplash.com/photo-1517191434949-5e90cd67d2b6', description: 'Rosette shaped succulent' },
        { id: 302, name: 'Aloe Vera', price: 14.99, image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a', description: 'Medicinal succulent plant' },
        { id: 303, name: 'Haworthia', price: 16.99, image: 'https://images.unsplash.com/photo-1517191434949-5e90cd67d2b6', description: 'Stripped pattern succulent' },
        { id: 304, name: 'Jade Plant', price: 24.99, image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a', description: 'Tree-like succulent' },
        { id: 305, name: 'Burro\'s Tail', price: 18.99, image: 'https://images.unsplash.com/photo-1517191434949-5e90cd67d2b6', description: 'Trailing succulent with beads' },
        { id: 306, name: 'Zebra Plant', price: 21.99, image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a', description: 'Striped pattern succulent' },
        { id: 307, name: 'String of Pearls', price: 19.99, image: 'https://images.unsplash.com/photo-1517191434949-5e90cd67d2b6', description: 'Trailing bead-like succulent' },
        { id: 308, name: 'Crown of Thorns', price: 27.99, image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a', description: 'Flowering succulent with thorns' },
      ]
    }
  ];

  return (
    <div className="product-list-page">
      <Navbar />
      
      <div className="product-list-container">
        <div className="hero-section">
          <h1>Welcome to E-Plant Shop</h1>
          <p>Discover our collection of beautiful plants for every space</p>
        </div>

        {plantCategories.map((category) => (
          <div key={category.id} className="category-section">
            <h2 className="category-title">{category.name}</h2>
            <p className="category-description">
              Browse our selection of {category.name.toLowerCase()} - perfect for your home or garden
            </p>
            
            <div className="plants-grid">
              {category.plants.map((plant) => (
                <div key={plant.id} className="plant-card">
                  <div className="plant-image">
                    <img src={plant.image} alt={plant.name} />
                    <div className="price-tag">${plant.price.toFixed(2)}</div>
                  </div>
                  
                  <div className="plant-info">
                    <h3>{plant.name}</h3>
                    <p className="plant-description">{plant.description}</p>
                    
                    <div className="plant-actions">
                      <button
                        className={`add-to-cart-btn ${addedItems[plant.id] ? 'added' : ''}`}
                        onClick={() => handleAddToCart(plant)}
                        disabled={addedItems[plant.id]}
                      >
                        {addedItems[plant.id] ? 'Added to Cart ✓' : 'Add to Cart'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="featured-section">
          <h2>Why Choose E-Plant Shop?</h2>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">🌱</div>
              <h3>Healthy Plants</h3>
              <p>All our plants are carefully nurtured and inspected for quality</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🚚</div>
              <h3>Free Shipping</h3>
              <p>Free delivery on orders over $50</p>
            </div>
            <div className="feature">
              <div className="feature-icon">📞</div>
              <h3>Expert Support</h3>
              <p>Get plant care advice from our horticulture experts</p>
            </div>
            <div className="feature">
              <div className="feature-icon">💯</div>
              <h3>30-Day Guarantee</h3>
              <p>We guarantee your plants will thrive or we'll replace them</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
                  key={plant.id}
                  style={{
                    border: "1px solid #ccc",
 ProductList;
