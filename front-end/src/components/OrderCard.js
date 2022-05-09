import React from 'react';
import PropTypes from 'prop-types';

function OrderCard({ id, status, date, price }) {
  return (
    <>
      <div className="order-card">
        <div className="order-id">
          <h3>{ `Pedido:${id}` }</h3>
        </div>
        <div className="order-status">
        <h3>{ status }</h3>
        </div>
      </div>
      <div>
      <div className="order-date">
        <h3>{ `${date}` }</h3>
        </div>
        <div className="order-price">
        <h3>{ `Preço:${price}` }</h3>
        </div>
      </div>
    </>
  );
}

OrderCard.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default OrderCard;
