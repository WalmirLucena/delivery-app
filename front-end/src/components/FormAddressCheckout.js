import React, { useState, useEffect } from 'react';
import '../styles/FormAddressCheckout.css';

function FormAdressCheckout() {
  // const [sellers, setSellers] = useState('Fullana');

  const sellers = [
    {
      name: 'Fullana',
    },
    {
      name: 'Zebirita',
    },
    {
      name: 'Zebi',
    }
  ]
  // const fetchSellers = async () => {
  //   const endpoint = '/role';
  //   const ans = await request(endpoint, { seller }, 'get');
  //   console.log(ans);
  //   setSellers(ans);
  // };

  // useEffect(() => {
  //   fetchSellers();
  // }, []);

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
          { sellers.map((seller) => (
            <option key={ seller.id } value={ seller.id }>
              { seller.name }
            </option>
          )) }
        </select>
        <div className="from-adress-checkout-content-input">
          <label htmlFor="address">
            Endereço
            <input
              data-testid="customer_checkout__input-address"
              type="text"
              id="address"
            />
          </label>
        </div>
        <div className="from-adress-checkout-content-input">
          <label htmlFor="number">
            Número
            <input
              id="number"
              data-testid="customer_checkout__input-addressNumber"
              type="text"
            />
          </label>
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
