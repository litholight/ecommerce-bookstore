import styled, { css } from "styled-components";

export const Jumbotron = styled.div`
  background-color: lightskyblue;
  padding: 25px;

  h2 {
    font-size: 3rem;
    margin: 0;
    padding-top: 50px;
  }
`;

export const ChildContainer = styled.div`
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
