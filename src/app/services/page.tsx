import LaserTechnology from "@/components/LaserTechnology";
import React from "react";
import { resurfacingData, faqs } from "../services/data";
import FAQ from "@/components/FAQ";

type Props = {};

const Services = (props: Props) => {
  return (
    <>
      <LaserTechnology resurfacingData={resurfacingData} />
      <FAQ faqs={faqs} />
    </>
  );
};

export default Services;
