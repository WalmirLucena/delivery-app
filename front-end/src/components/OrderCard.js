import React from 'react';
import PropTypes from 'prop-types';
import '../styles/OrderCard.css';

function OrderCard({ order: { id, price, name } }) {
  return (
    <section className="orders">
      <div className="order-card">
        <div className="order-id">
          <h3>{ `Pedido:${id}` }</h3>
        </div>
        <div className="order-status">
          <h3>{ `Status:${name.split(' ')[0]}` }</h3>
        </div>
        <div className="order-details">
          <h3>{ `Data:${id}` }</h3>
          <h3>{ `Preço:${price}` }</h3>
        </div>
      </div>
    </section>
  );
}

OrderCard.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number.isRequired,
    // status: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
};

export default OrderCard;
