import React, { useEffect } from 'react';
import NavBarSeller from '../../components/NavBarSeller';
import OrderCard from '../../components/OrderCard';
import { request } from '../../services/requests';

function CustomerOrder() {
  const [orders, setOrders] = React.useState([]);

  const getUser = () => {
    const user = localStorage.getItem('user');
    const ans = JSON.parse(user);
    return ans;
  };

  const fetchData = async () => {
    const { id } = getUser();
    const endpoint = `/sales/user-id/${id}`;
    const response = await request(endpoint, {}, 'get');
    setOrders(response);
  };

  useEffect(() => {
    fetchData();
  });

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
