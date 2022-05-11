import React from 'react';
import '../styles/FormAddressCheckout.css';
function FormAdressCheckout() { 
  return (
    <div className="from-adress-checkout">
      <div className="from-adress-checkout-title">
        <h2>Detalhes e Endereço para Entrega</h2>
      </div>
      <form className="from-adress-checkout-content">
        <select
          data-testid="customer_checkout__select-seller"
        >
          P. Vendedora Responsável
          <option value="1">Vendedora 1</option>
          <option value="2">Vendedora 2</option>
          <option value="3">Vendedora 3</option>
        </select>
        <div className="from-adress-checkout-content-input">
          <label htmlFor="address">Endereço</label>
          <input
            data-testid="customer_checkout__input-address"
            type="text"
            id="address"
          />
        </div>
        <div className="from-adress-checkout-content-input">
          <label htmlFor="number">Número</label>
          <input
            id="number"
            data-testid="customer_checkout__input-addressNumber"
            type="text"
          />
        </div>
      </form>
      <div>
        <button
          className="from-adress-checkout-btn"
          data-testid="customer_checkout__button-submit-order"
          type="button"
        >
          FINALIZAR PEDIDO
        </button>
      </div>
    </div>
  );
}
export default FormAdressCheckout;