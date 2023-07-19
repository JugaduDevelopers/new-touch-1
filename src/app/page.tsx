import Banner from "@/components/Banner";
import Slider from "@/components/Slider";
import React from "react";
import Gallery from "@/components/Gallery";
import Statistics from "@/components/Statistics";
import Blog from "@/components/Blog";
import Different from "@/components/Different";
import LaserScroll from "@/components/LaserScroll";
import About from "@/components/About";
import Branch from "@/components/Branch";
import VideoGallery from "@/components/VideoGallery";
import GetAQuote from "@/components/GetAQuote";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <Banner />
      <Gallery />
      <Statistics />
      <Blog />
      <Different />
      {/* <LaserScroll /> */}
      <About />
      <Branch />
      <VideoGallery />
      <GetAQuote />
    </>
  );
};

export default Home;
