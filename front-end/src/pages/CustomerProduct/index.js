import React from 'react';
import NavBarCustomer from '../../components/NavBarCustomer';
import ProductCard from '../../components/ProductCard';

import mockProducts from '../../mockProducts';

function CustomerProduct() {
  return (
    <>
      <NavBarCustomer />
      <div className="products-container">
        { mockProducts.map((product, index) => (
          <ProductCard key={ index } { ...product } />
        )) }
      </div>
    </>
  );
}
export default CustomerProduct;
