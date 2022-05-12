import React from 'react';
import PropTypes from 'prop-types';
import '../styles/OrderCard.css';

function OrderCard({
   order: {
    id,
    status,
    saleDate,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
  }, path }) {
  return (
    <section className="orders">
      <div className="order-card">
        <div
          className="order-id"
          data-testid={ `${path}_orders__element-order-id-` }
        >
          <h3>{ `Pedido ${id}` }</h3>
        </div>
        <div className="order-status">
          <h3 data-testid={ `${path}_orders__element-delivery-status-` }>
            {status}
          </h3>
        </div>
        <div className="order-details">
          <h3 data-testid={ `${path}_orders__element-order-date-` }>
            { saleDate }
          </h3>
          <h3 data-testid={ `${path}_orders__element-card-price-` }>
            R$
            { totalPrice.replace('.', ',') }
          </h3>
        </div>
        <div className="order-address">
          <h3 data-testid={ `${path}_orders__element-card-address-` }>
            { `${deliveryAddress}, ${deliveryNumber} ` }

          </h3>
        </div>
      </div>
    </section>
  );
}

OrderCard.propTypes = {
  path: PropTypes.string.isRequired,
  order: PropTypes.shape({
    id: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    saleDate: PropTypes.string.isRequired,
    totalPrice: PropTypes.string.isRequired,
    deliveryAddress: PropTypes.string.isRequired,
    deliveryNumber: PropTypes.string.isRequired,
  }).isRequired,
};

export default OrderCard;
