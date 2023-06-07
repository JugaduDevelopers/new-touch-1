import Banner from "../components/Banner";
import Consultation from "@/containers/consultation";
import React from "react";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <Banner />
      <Consultation />
    </>
  );
};

export default Home;
