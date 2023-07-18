import TestimonialCard from "@/components/TestimonialCard";
import React from "react";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <div className="bg-[#FFD7D7] py-10">
        <div className="container mx-auto">
          <p className="uppercase flex justify-center items-center text-darkred">
            Testimonial
          </p>
          <h3 className="flex justify-center items-center mb-10 max-sm:text-3xl">
            What Our Client Says
          </h3>
          <div className="flex flex-wrap">
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
