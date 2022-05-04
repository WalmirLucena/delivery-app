import React, { useEffect, useState } from 'react';
import NavBarCustomer from '../../components/NavBarCustomer';
import ProductCard from '../../components/ProductCard';
import { request } from '../../services/requests';

const getAllProducts = async () => {
  const endpoint = '/products';
  const rawData = await request(endpoint, {}, 'get');
  const response = rawData.reduce((acc, valor, index) => {
    acc[index] = { ...valor, quantity: 0 };
    return acc;
  }, []);
  console.log(response); // tem que tirar depois ,mas agora tá útil;
  return response;
};

function CustomerProduct() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const apiAnser = await getAllProducts();
      setProducts(apiAnser);
    }
    fetchData();
  }, []);

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
