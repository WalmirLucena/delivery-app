import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import '../styles/CartList.css';

function OrderDetails(
  { orders: {
    id,
    totalPrice,
    saleDate,
    status,
  },
  products,
  seller = 'não informado' },
) {
  const [itensCart, setItensCart] = useState([]);
  const [subTotal, setSubtotal] = useState(0);

  const getItens = () => {
    const itens = localStorage.getItem('carrinho');
    const ans = JSON.parse(itens);
    setItensCart(ans);
  };

  useEffect(() => {
    getItens();
  }, []);

  const calcSubTotal = () => {
    const sum = itensCart.reduce((acc, value) => {
      acc[value.name] = ((value.quantity * value.price).toFixed(2).replace(/\./, ','));
      return acc;
    }, {});
    setSubtotal(sum);
  };

  useEffect(() => {
    calcSubTotal();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itensCart]);

  return (
    <div className="cart-list-background">
      <div className="cart-list-title">
        <h2> Detalhe do Pedido </h2>
      </div>
      <section className="order-header">
        <div
          data-testid="customer_order_details__element-order
        -details-label-order-id"
        >
          <h2>
            { `PEDIDO ${id}`}
          </h2>
        </div>
        <div
          data-testid="customer_order_details__element-order
          -details-label-seller-name"
        >
          <h2>
            {`P.Vend: ${seller || 'Não informado'}`}
          </h2>
        </div>
        <div>
          <h2
            data-testid="customer_order_details__element-order
        -details-label-order-date"
          >
            {moment(saleDate).format('DD/MM/YYYY')}
          </h2>
        </div>
        <div
          data-testid="customer_order_details__element-
          order-details-label-delivery-status"
        >
          <h2>
            {status}
          </h2>
        </div>
        <div>
          <button
            type="button"
            data-testid="customer_order_details__button-delivery-check"
          >
            MARCAR COMO ENTREGUE
          </button>
        </div>
      </section>
      <div className="cart-list-container">
        { products && products.map((item, index) => (
          <div className="cart-list-content-item" key={ index }>
            <div className="cart-list-content-item-number">
              <span
                data-testid={
                  `customer_order_details__element-order-table-item-number-${index}`
                }
              >
                { index + 1}
              </span>
            </div>
            <div
              className="cart-list-content-item-name"
              data-testid={ `customer_order_details__element-order-table-name-${index}` }
            >
              <span>{ item.name }</span>
            </div>
            <div
              className="cart-list-content-item-quantity"
            >
              <span
                data-testid={
                  `customer_order_details__element-order-table-quantity-${index}`
                }
              >
                { item.quantity }

              </span>
            </div>
            <div
              className="cart-list-content-item-price"
            >
              <span
                data-testid={
                  `customer_order_details__element-order-table-unit-price-${index}`
                }
              >
                { item.price.replace(/\./, ',') }

              </span>
            </div>
            <div
              className="cart-list-content-item-subtotal"
              data-testid={
                `customer_order_details__element-order-table-sub-total-${index}`
              }
            >
              <span>{ subTotal && subTotal[item.name] }</span>
            </div>
          </div>
        )) }
      </div>
      <div
        className="total-price"
      >
        <h2>Total: R$</h2>
        <h2
          data-testid="customer_order_details__element-order-total-price"
        >
          { totalPrice.replace(/\./, ',') }
        </h2>
      </div>
    </div>
  );
}

OrderDetails.propTypes = {
  orders: PropTypes.shape({
    id: PropTypes.number.isRequired,
    saleDate: PropTypes.string.isRequired,
    seller: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    totalPrice: PropTypes.number.isRequired,
  }).isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  seller: PropTypes.string.isRequired,
};
export default OrderDetails;
