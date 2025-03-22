import React from "react";

const ProductCard = ({ product, addToCart }) => {
  const { id, name, description, price, product_img } = product;

  return (
    <div className="product-card">
      <div className="image-container">
        <img src={product_img} alt={name} className="product-image" loading="lazy" />
      </div>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{price} руб.</p>
      <button onClick={() => addToCart({ id, name, price })}>Add to cart</button>
    </div>
  );
};

export default ProductCard;