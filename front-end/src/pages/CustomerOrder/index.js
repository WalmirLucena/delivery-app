import React, { useEffect } from 'react';
import NavBarSeller from '../../components/NavBarSeller';
import OrderCard from '../../components/OrderCard';
import { request } from '../../services/requests';

function CustomerOrder() {
  const [orders, setOrders] = React.useState([]);

  const fetchData = async () => {
    const endpoint = '/sales';
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
        path="customers"
        required="/customer/order/"
      />))}
    </>
  );
}

export default CustomerOrder;
