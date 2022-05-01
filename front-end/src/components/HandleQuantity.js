import React from 'react';

function HandleQuantity(
  // quantity,
  // incrementQuantity,
  // decrementQuantity,
) {
  return (
    <div className="quantity-controls">
      <button
        type="button"
        className="quantity-controls-button"
        // onClick={ decrementQuantity }
      >
        -
      </button>
      <span className="quantity-controls-quantity">
        0
      </span>
      <button
        type="button"
        className="quantity-controls-button"
        // onClick={ incrementQuantity }
      >
        +
      </button>
    </div>
  );
}

export default HandleQuantity;
