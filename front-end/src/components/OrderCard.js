import React from 'react';
import PropTypes from 'prop-types';
import '../styles/OrderCard.css';

function OrderCard({ order: { id, price, name }, path }) {
  return (
    <section className="orders">
      <div className="order-card">
        <div
          className="order-id"
          data-testid={ `${path}_orders__element-order-id-` }
        >
          <h3>{ `Pedido:${id}` }</h3>
        </div>
        <div
          className="order-status"
          data-testid={ `${path}_orders__element-delivery-status-` }
        >
          <h3>{ `Status:${name.split(' ')[0]}` }</h3>
        </div>
        <div className="order-details">
          <h3 data-testid={ `${path}_orders__element-order-date-` }>
            { `Data:${id}` }
          </h3>
          <h3 data-testid={ `${path}_orders__element-card-prie-` }>
            { `Preço:${price}` }
          </h3>
        </div>
        <div
          className="order-address"
          data-testid={ `${path}_orders__element-card-address-` }
        >
          <h3>{ `Endereço:${name}` }</h3>
        </div>
      </div>
    </section>
  );
}

OrderCard.propTypes = {
  path: PropTypes.string.isRequired,
  order: PropTypes.shape({
    id: PropTypes.number.isRequired,
    // status: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
};

export default OrderCard;
