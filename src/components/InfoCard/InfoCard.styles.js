import styled from "styled-components";

export const InfoCardHeader = styled.div`
  background-color: lightgrey;
  font-size: 2rem;
  padding: 15px;
  border-radius: 10px 10px 0 0;
`;

export const InfoItem = styled.div`
  background-color: white;
  display: block;
  margin: 0px;
  padding: 15px;
  border-bottom: 1px solid lightgrey;
  a {
    text-decoration: none;
    color: blue;
  }
  :last-child {
    border-bottom: none;
    border-radius: 0px 0px 10px 10px;
  }
`;

export const InfoContainer = styled.div`
  border: 1px solid lightgrey;
  margin: 25px;
  border-radius: 10px;
`;
