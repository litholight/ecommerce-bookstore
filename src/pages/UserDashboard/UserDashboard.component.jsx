import React from "react";
import Layout from "../../components/Layout/Layout.component";
import {
  InfoContainer,
  InfoItem,
  InfoCardHeader
} from "./UserDashboard.styles";
import InfoCard from "../../components/InfoCard/InfoCard.component";

const UserDashboard = () => {
  return (
    <Layout title="Dashboard" description="User Dashboard">
      <InfoCard
        header="User Information"
        infoItems={["name", "email", "role"]}
      />
      <InfoCard header="Purchase History" infoItems={["history"]} />
    </Layout>
  );
};

export default UserDashboard;
