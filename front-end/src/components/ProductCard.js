import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import HandleQuantity from './HandleQuantity';
import DeliveryContext from '../context/DeliveryContext';

function ProductCard({ id, price, name, image }) {
  const [itemCart, setItem] = useState({ id, name, price, quantity: 0 });
  const { setNewItem } = useContext(DeliveryContext);

  const addQuantity = async () => {
    setItem({ id, name, price, quantity: itemCart.quantity + 1 });
    setNewItem({ id, name, price, quantity: itemCart.quantity + 1 });
    return itemCart; // provisório
  };

  // const removeQuantity = async () => {
  //   setItem({ id, name, price, quantity: itemCart.quantity - 1 });
  //   setNewItem({ id, name, price, quantity: itemCart.quantity - 1 });
  //   return itemCart; // provisório
  // };

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
        <HandleQuantity quantity={ itemCart.quantity } addQuantity={ addQuantity } />
      </div>
    </>
  );
}

ProductCard.propTypes = {
  price: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ProductCard;
