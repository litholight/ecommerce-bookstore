import styled from "styled-components";

export const ProductContainer = styled.div`
  background-color: white;
  border: 1px solid lightgrey;
  margin: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ProductCardHeader = styled.div`
  width: 100%;
  background-color: lightgrey;
  color: black;
  font-size: 1rem;
  font-weight: bold;
  padding: 5px;
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
  padding: 0px 10px;
`;

export const ProductPrice = styled.div`
  background-color: white;
  border: none;
  font-size: 1rem;
`;
