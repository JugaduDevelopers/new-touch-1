import LaserTechnology from "@/components/LaserTechnology";
import React from "react";
import { resurfacingData, faqs } from "../services/data";
import FAQ from "@/components/FAQ";
import Consultation from "@/components/consultation";
import LaserScroll from "@/components/LaserScroll";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import TreatmentGallery from "@/components/TreatmentGallery";
import LaserSkinBanner from "@/components/LaserSkinBanner";

type Props = {};

const Services = (props: Props) => {
  return (
    <>
      <LaserSkinBanner />
      <Consultation />
      <LaserScroll />
      <TreatmentGallery />
      <LaserTechnology resurfacingData={resurfacingData} />
      <BeforeAfterGallery />
      <FAQ faqs={faqs} />
    </>
  );
};

export default Services;
