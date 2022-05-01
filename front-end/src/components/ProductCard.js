import React from 'react';
import PropTypes from 'prop-types';
import HandleQuantity from './HandleQuantity';

function ProductCard({ price, name, image }) {
  return (
    <>
      <div className="product-card">
        <div className="product-card-price">
          <h3>{ price }</h3>
        </div>
        <div className="product-card-image">
          <img src={ image } alt={ name } />
        </div>
      </div>
      <div>
        <div className="product-card-name">
          <h3>{ name }</h3>
        </div>
        <HandleQuantity />
      </div>
    </>
  );
}

ProductCard.propTypes = {
  price: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ProductCard;
