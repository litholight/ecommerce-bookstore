import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard.component";

import { NewArrivalsContainer } from "./NewArrivals.styles";

const NewArrivals = ({ products }) => {
  return (
    <NewArrivalsContainer>
      <ProductCard key={products.id} products={products} />
    </NewArrivalsContainer>
  );
};

export default NewArrivals;
