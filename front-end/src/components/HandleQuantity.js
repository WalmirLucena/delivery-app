import React from 'react';
import PropTypes from 'prop-types';
import '../styles/HandleQuantity.css';

function HandleQuantity(
  {
    id,
    quantity,
    addQuantity,
    decreaseQuantity,
  },
) {
  return (
    <div className="quantity-controls">
      <button
        data-testid={ `customer_products__button-card-rm-item-${id}` }
        type="button"
        className="quantity-controls-button"
        onClick={ decreaseQuantity }
      >
        -
      </button>
      <span
        data-testid={ `customer_products__input-card-quantity-${id}` }
        className="quantity-controls-quantity"
      >
        { quantity }
      </span>
      <button
        data-testid={ `customer_products__button-card-add-item-${id}` }
        type="button"
        className="quantity-controls-button"
        onClick={ addQuantity }
      >
        +
      </button>
    </div>
  );
}

HandleQuantity.propTypes = {
  addQuantity: PropTypes.func.isRequired,
  decreaseQuantity: PropTypes.func.isRequired,
  quantity: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default HandleQuantity;
