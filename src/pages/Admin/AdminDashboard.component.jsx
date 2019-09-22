import React from "react";
import Layout from "../../components/Layout/Layout.component";
import InfoCard from "../../components/InfoCard/InfoCard.component";

const AdminDashboard = props => {
  const { displayName, email, role } = props.currentUser;

  return (
    <Layout title="Admin Dashboard" description={`Hello, ${displayName}!`}>
      <InfoCard
        header="Links"
        infoItems={["Create Category", "Create Product"]}
        isLink={true}
      />
      <InfoCard
        header="User Information"
        infoItems={[`${displayName}`, `${email}`, `${role}`]}
      />
    </Layout>
  );
};

export default AdminDashboard;
