import ResurfacingCard from "@/components/ResurfacingCard";
import Banner from "../components/Banner";
import Consultation from "@/components/consultation";
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
