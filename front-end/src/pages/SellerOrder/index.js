import React, { useEffect, useState } from "react";
import NavBarSeller from '../../components/NavBarSeller';
import OrderCard from '../../components/OrderCard';
import { request } from '../../services/requests';

function SellerOrder() {

  const [orders, setOrders] = React.useState([]);
 
  useEffect( async () => {
      const endpoint = '/products';
      const response = await request(endpoint, {}, 'get');
      setOrders(response);
  }, []);

  return (
    <>
      <NavBarSeller />
      { orders.map(order =>  <OrderCard key={order.id} order={order} /> )}
    </>
  );
}

export default SellerOrder;
