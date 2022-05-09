import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import HandleQuantity from './HandleQuantity';
import DeliveryContext from '../context/DeliveryContext';

function ProductCard({ id, price, name, image, quantity }) {
  const [itemCart, setItem] = useState({ id, name, price, quantity });
  const { setNewItem } = useContext(DeliveryContext);

  const addQuantity = async () => {
    setItem({ id, name, price, quantity: itemCart.quantity + 1 });
    setNewItem({ id, name, price, quantity: itemCart.quantity + 1 });
    return itemCart;
  };

  const removeQuantity = async () => {
    setItem({ id, name, price, quantity: itemCart.quantity - 1 });
    setNewItem({ id, name, price, quantity: itemCart.quantity - 1 });
    return itemCart;
  };

  return (
    <>
      <div className="product-card">
        <div className="product-card-price">
          <h3>{ `R$${price}` }</h3>
        </div>
        <div className="product-card-image">
          <img src={ image } alt={ name } />
        </div>
      </div>
      <div>
        <div className="product-card-name">
          <h3>{ name }</h3>
        </div>
        <HandleQuantity
          quantity={ itemCart.quantity }
          addQuantity={ addQuantity }
          decreaseQuantity={ removeQuantity }
        />
      </div>
    </>
  );
}

ProductCard.propTypes = {
  quantity: PropTypes.number.isRequired,
  price: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ProductCard;
