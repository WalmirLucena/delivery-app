import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import HandleQuantity from './HandleQuantity';
import DeliveryContext from '../context/DeliveryContext';

function ProductCard({ price, name, image, quantity }) {
  const [itemCart, setItem] = useState({ name, price, quantity: 0 });
  const { setCart, cart } = useContext(DeliveryContext);

  const addQuantity = async () => {
    await setItem({ name, price, quantity: itemCart.quantity + 1 });
    if (cart === []) await setCart([...cart, { name, price, quantity }]); // não tá funcionando ainda;
    return console.log(itemCart); // provisório
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
        <HandleQuantity quantity={ itemCart.quantity } addQuantity={ addQuantity } />
      </div>
    </>
  );
}

ProductCard.propTypes = {
  price: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default ProductCard;
