import React, { useEffect, useState } from "react";
import NavBarSeller from '../../components/NavBarSeller';
import OrderCard from '../../components/OrderCard';
import { request } from '../../services/requests';

function SellerOrder() {

  const [orders, setOrders] = React.useState([]);
 
  useEffect( async () => {
      const endpoint = '/orders';
      const response = await request(endpoint, {}, 'get');
      setOrders(response);
  }, []);

  console.log(orders);

  return (
    <>
      <NavBarSeller />
      <OrderCard />
    </>
  );
}

export default SellerOrder;
