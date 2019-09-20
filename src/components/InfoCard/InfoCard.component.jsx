import React from "react";
import { InfoContainer, InfoItem, InfoCardHeader } from "./InfoCard.styles";

const InfoCard = ({ header, infoItems }) => (
  <InfoContainer>
    <InfoCardHeader>{header}</InfoCardHeader>
    {infoItems.map(infoItem => (
      <InfoItem>{infoItem}</InfoItem>
    ))}
  </InfoContainer>
);

export default InfoCard;
