import styled, { css } from "styled-components";
import gbww from "./gbww.jpg";

export const Jumbotron = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(90, 40, 150, 0.8)),
    url(${gbww});
  background-repeat: no-repeat;
  background-position: cover;
  background-attachment: fixed;
  padding: 25px;
  color: white;

  h2 {
    font-family: "Prata", serif;
    font-size: 3rem;
    margin: 0;
    padding-top: 50px;
  }
`;

export const ChildContainer = styled.div`
  background-color: white;
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
