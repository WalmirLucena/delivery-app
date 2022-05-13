import React, { useEffect, useState, useContext } from 'react';
import NavBarSeller from '../../components/NavBarSeller';
import OrderDetails from '../../components/OrderDetails';
import { request } from '../../services/requests';
import DeliveryContext from '../../context/DeliveryContext';

function CustomerOrderDetails() {
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
      const response = await request(endpoint, { saleId: sale.saleId }, 'post');
      setOrders(response);
      setLoading(false);
    }
    fetchData();
    getCart();
  }, [sale.saleId]);

  return (
    <>
      <NavBarSeller />
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

export default CustomerOrderDetails;
