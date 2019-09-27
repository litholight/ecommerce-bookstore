import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard.component";

import { NewArrivalsContainer } from "./NewArrivals.styles";

const NewArrivals = ({ products }) => {
  return products.map(product => (
    <NewArrivalsContainer>
      <ProductCard key={product.id} product={product} />
    </NewArrivalsContainer>
  ));
};

export default NewArrivals;
