import ResurfacingCard from "@/components/ResurfacingCard";
import Banner from "../components/Banner";
import Consultation from "@/components/consultation";
import React from "react";
import Gallery from "@/components/Gallery";
import Statistics from "@/components/Statistics";
import Blog from "@/components/Blog";
import Different from "@/components/Different";
import TestimonialContainer from "@/components/TestimonialContainer";
import Contact from "@/components/Contact";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <Banner />
      <Consultation />
      <Different />
      <Gallery />
      <Statistics />
      <Blog />
      <Different />
      <TestimonialContainer />
    </>
  );
};

export default Home;
