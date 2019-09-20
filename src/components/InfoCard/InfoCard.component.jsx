import React from "react";
import { Link } from "react-router-dom";
import { InfoContainer, InfoItem, InfoCardHeader } from "./InfoCard.styles";

const InfoCard = ({ header, infoItems, isLink }) => (
  <InfoContainer>
    <InfoCardHeader>{header}</InfoCardHeader>
    {infoItems.map(infoItem => (
      <InfoItem key={infoItem}>
        {isLink ? <Link to={`/${infoItem}`}>{infoItem}</Link> : infoItem}
      </InfoItem>
    ))}
  </InfoContainer>
);

export default InfoCard;
