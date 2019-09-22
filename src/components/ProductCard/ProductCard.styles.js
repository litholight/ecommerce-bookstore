import styled from "styled-components";

export const ProductContainer = styled.div`
  background-color: white;
  border: 1px solid lightgrey;
  margin: 10px;
  border-radius: 10px;
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ProductCardHeader = styled.div`
  width: 100%;
  background-color: #2da7df;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  padding: 15px;
  text-align: center;
  border-radius: 10px 10px 0 0;
`;

export const ProductImage = styled.img`
  padding: 10px;
  max-width: 170px;
`;

export const ProductItem = styled.div`
  background-color: white;
  display: block;
  margin: 0px;
  padding: 15px;
`;

export const ProductPrice = styled.div`
  background-color: white;
  border: none;
  font-size: 1rem;
  padding: 15px;
`;
