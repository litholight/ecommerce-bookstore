import React from "react";
import Layout from "../../components/Layout/Layout.component";
import NewArrivals from "../NewArrivals/NewArrivals.component";

const Homepage = () => {
  const products = [
    {
      id: 1,
      header: "Criticism and the Growth of Knowledge",
      imageUrl: "/book-images/philoscience/criticism.jpg",
      description: "React NativeReact NativeReact NativeReact Native",
      price: "40"
    },
    {
      id: 2,
      header: "Popper - Conjectures and Refutations",
      imageUrl: "/book-images/philoscience/popper.jpg",
      description: "React NativeReact NativeReact NativeReact Native",
      price: "40"
    },
    {
      id: 3,
      header: "The Rationality of Science",
      imageUrl: "/book-images/philoscience/rationality.jpg",
      description: "React NativeReact NativeReact NativeReact Native",
      price: "40"
    },
    {
      id: 4,
      header: "Criticism and the Growth of Knowledge",
      imageUrl: "/book-images/philoscience/criticism.jpg",
      description: "React NativeReact NativeReact NativeReact Native",
      price: "40"
    },
    {
      id: 5,
      header: "Popper - Conjectures and Refutations",
      imageUrl: "/book-images/philoscience/popper.jpg",
      description: "React NativeReact NativeReact NativeReact Native",
      price: "40"
    },
    {
      id: 6,
      header: "The Rationality of Science",
      imageUrl: "/book-images/philoscience/rationality.jpg",
      description: "React NativeReact NativeReact NativeReact Native",
      price: "40"
    }
  ];
  return (
    <div>
      <Layout title="Sophia's Bookstore" description="Live Demonstration">
        <NewArrivals products={products} />
      </Layout>
    </div>
  );
};

export default Homepage;
