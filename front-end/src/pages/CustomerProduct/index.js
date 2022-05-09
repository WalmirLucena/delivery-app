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
  console.log(response); // tem que tirar depois ,mas agora tá útil;
  return response;
};

function CustomerProduct() {
  const [products, setProducts] = useState([]);
  const { cart, setCart, newItem } = useContext(DeliveryContext);
  useEffect(() => {
    async function fetchData() {
      const apiAnser = await getAllProducts();
      setProducts(apiAnser);
    }
    fetchData();
  }, []);

  const createCart = async () => {
    let newCart = cart;
    if (!newCart) newCart = [newItem];
    const exists = newCart.some((element) => element.name === newItem.name);
    if (exists) {
      const array = newCart.reduce((acc, valor, index) => {
        if (valor.name === newItem.name) {
          acc[index] = newItem;
        } else {
          acc[index] = valor;
        }
        return acc;
      }, []);
      await setCart(array);
    }
    if (!exists) await setCart([...cart, newItem]);
    return console.log(cart);
  };

  useEffect(() => {
    createCart();
  }, [newItem]);

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
