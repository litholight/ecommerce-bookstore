import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard.component";

const NewArrivals = ({ products }) => {
  return products.map(product => (
    <ProductCard key={product.id} product={product} />
  ));
};

export default NewArrivals;
