import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import HandleQuantity from './HandleQuantity';
import DeliveryContext from '../context/DeliveryContext';

function ProductCard({ id, price, name, url_image: urlImage, quantity }) {
  const [itemCart, setItem] = useState({ id, name, price, quantity });
  const { setNewItem } = useContext(DeliveryContext);

  const addQuantity = async () => {
    setItem({ id, name, price, quantity: itemCart.quantity + 1 });
    setNewItem({ id, name, price, quantity: itemCart.quantity + 1 });
    return itemCart;
  };

  const removeQuantity = async () => {
    // https://stackoverflow.com/questions/53986315/how-to-prevent-state-increment-decrement-counter-going-below-1
    setItem({ id, name, price, quantity: Math.max(0, itemCart.quantity - 1) });
    setNewItem({ id, name, price, quantity: Math.max(0, itemCart.quantity - 1) });
    return itemCart;
  };
  return (
    <>
      <div className="product-card">
        <div className="product-card-price">
          <h3>{ `R$${price}` }</h3>
        </div>
        <div className="product-card-image">
          <img src={ urlImage } alt={ name } />
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
  url_image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ProductCard;
