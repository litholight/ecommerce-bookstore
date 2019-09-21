import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard.component";

const NewArrivals = ({ products }) => {
  return products.map((product, i) => (
    <ProductCard
      key={i}
      header={product.header}
      imageUrl={product.imageUrl}
      description={product.description}
      price={product.price}
    />
  ));
};

export default NewArrivals;
