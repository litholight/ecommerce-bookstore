import styled from "styled-components";

export const InfoCardHeader = styled.div`
  font-size: 2rem;
  padding: 15px;
`;

export const InfoItem = styled.div`
  background-color: white;
  display: block;
  margin: 0px;
  padding: 15px;
  border-bottom: 1px solid lightgrey;
  :last-child {
    border-bottom: none;
    border-radius: 0px 0px 10px 10px;
  }
`;

export const InfoContainer = styled.div`
  background-color: lightgrey;
  border: 1px solid lightgrey;
  margin: 25px;
  border-radius: 10px;
`;
