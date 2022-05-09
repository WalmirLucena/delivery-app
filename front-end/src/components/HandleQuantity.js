import React from 'react';
import PropTypes from 'prop-types';
import '../styles/HandleQuantity.css';

function HandleQuantity(
  {
    quantity,
    addQuantity,
    // decreaseQuantity,
  },
) {
  return (
    <div className="quantity-controls">
      <button
        type="button"
        className="quantity-controls-button"
        // onClick={ () => addQuantity() }
      >
        -
      </button>
      <span className="quantity-controls-quantity">
        { quantity }
      </span>
      <button
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
  // decreaseQuantity: PropTypes.func.isRequired,
  quantity: PropTypes.objectOf(Number).isRequired,
};

export default HandleQuantity;
