import React, { useEffect, useState, useContext } from 'react';
import { request } from '../../services/requests';
import NavBarCustomer from '../../components/NavBarCustomer';
import ProductCard from '../../components/ProductCard';
import DeliveryContext from '../../context/DeliveryContext';

const getAllProducts = async () => {
  const endpoint = '/products';
  const rawData = await request(endpoint, {}, 'get');
  const response = rawData.reduce((acc, valor, index) => {
    acc[index] = { ...valor, quantity: 0 };
    return acc;
  }, []);
  return response;
};

function CustomerProduct() {
  const [products, setProducts] = useState([]);
  const { setCart, newItem } = useContext(DeliveryContext);
  useEffect(() => {
    async function fetchData() {
      const apiAnswer = await getAllProducts();
      setProducts(apiAnswer);
    }
    fetchData();
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const createCart = async () => {
    const product = products.find((element) => element.name === newItem.name);
    product.quantity = newItem.quantity;
    await setCart(products);
  };

  useEffect(() => {
    createCart();
  }, [createCart, newItem]);

  return (
    <>
      <NavBarCustomer />
      <div className="products-container">
        { products.map((product, index) => (
          <ProductCard key={ index } { ...product } />
        )) }
      </div>
      <button type="button">
        Ver carrinho: R$
      </button>
    </>
  );
}
export default CustomerProduct;
