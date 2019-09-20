import React from "react";
import Layout from "../../components/Layout/Layout.component";
import InfoCard from "../../components/InfoCard/InfoCard.component";

const UserDashboard = props => {
  console.log(props.currentUser);
  const { displayName, email } = props.currentUser;

  return (
    <Layout title="Dashboard" description={`Hello, ${displayName}!`}>
      <InfoCard
        header="User Links"
        infoItems={["Cart", "Profile"]}
        isLink={true}
      />
      <InfoCard
        header="User Information"
        infoItems={[`${displayName}`, `${email}`, "role"]}
      />
      <InfoCard header="Purchase History" infoItems={["history"]} />
    </Layout>
  );
};

export default UserDashboard;
