import LaserTechnology from "@/components/LaserTechnology";
import React from "react";
import { resurfacingData, faqs } from "../services/data";
import FAQ from "@/components/FAQ";
import DraggableDiv from "@/components/DragableDiv";

type Props = {};

const Services = (props: Props) => {
  return (
    <>
      <LaserTechnology resurfacingData={resurfacingData} />
      <FAQ faqs={faqs} />
      <DraggableDiv />
    </>
  );
};

export default Services;
