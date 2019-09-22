import React from "react";
import { Link } from "react-router-dom";
import { InfoContainer, InfoItem, InfoCardHeader } from "./InfoCard.styles";

const linkHelper = infoItem => (
  <Link to={`/${infoItem.split(" ")[0]}/${infoItem.split(" ")[1]}`}>
    {infoItem}
  </Link>
);

const InfoCard = ({ header, infoItems, isLink }) => (
  <InfoContainer>
    <InfoCardHeader>{header}</InfoCardHeader>
    {infoItems.map(infoItem => (
      <InfoItem key={infoItem}>
        {isLink ? linkHelper(infoItem) : infoItem}
      </InfoItem>
    ))}
  </InfoContainer>
);

export default InfoCard;
