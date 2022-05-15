import PropTypes from 'prop-types';
import React, { useEffect, useState, useContext } from 'react';
import NavBarCustomer from '../../components/NavBarCustomer';
import OrderDetails from '../../components/OrderDetails';
import { request } from '../../services/requests';
import DeliveryContext from '../../context/DeliveryContext';

function CustomerOrderDetails({ match }) {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const { sale } = useContext(DeliveryContext);

  const getCart = () => {
    const itens = localStorage.getItem('carrinho');
    const ans = JSON.parse(itens);
    setProducts(ans);
  };

  useEffect(() => {
    async function fetchData() {
      const endpoint = '/orders';
      const response = await request(endpoint, { saleId: +match.params.id }, 'post');
      setOrders(response);
      setLoading(false);
    }
    fetchData();
    getCart();
  }, [match.params.id, sale.saleId]);

  return (
    <>
      <NavBarCustomer />
      { !loading ? (
        <OrderDetails
          orders={ orders[0] }
          seller={ sale.sellerName }
          products={ products }
        />

      ) : (
        <h2> Carregando ...</h2>
      )}

    </>
  );
}

CustomerOrderDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default CustomerOrderDetails;
