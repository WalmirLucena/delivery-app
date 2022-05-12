import React, { useEffect } from 'react';
import NavBarSeller from '../../components/NavBarSeller';
import OrderCard from '../../components/OrderCard';
import { request } from '../../services/requests';

function SellerOrder() {
  const [orders, setOrders] = React.useState([]);

  const fetchData = async () => {
    const endpoint = '/';
    const response = await request(endpoint, {}, 'get');
    setOrders(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <NavBarSeller />
      { orders.map((order) => (<OrderCard
        key={ order.id }
        order={ order }
        path="seller"
      />))}
    </>
  );
}

export default SellerOrder;
