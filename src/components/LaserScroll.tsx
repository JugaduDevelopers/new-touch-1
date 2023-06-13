import Image from "next/image";
import React from "react";
import First from "../../public/images/Laser_2.png";

type Props = {};

const LaserScroll = (props: Props) => {
  return (
    <section className="bg-[#FFD7D7] text-container py-10">
      <div className="relative min-h-[470px]">
        <hr className="h-px my-8 bg-black border-0" />
        <h1 className="scrolling-text text-6xl text-[#FFD7D7]">
          30% Off Your Journey to Flawless Skin: Laser Resurfacing, Unveil Your
          Radiance!
        </h1>
        <hr className="h-px my-8 bg-black border-0" />
        <Image
          src={First}
          alt="First"
          width={300}
          className="absolute z-20 -top-[72px] mx-80 aspect-auto lg:block hidden"
        />
        <div className="flex flex-col justify-center absolute lg:left-[500px] top-40 lg:mx-60 overflow-hidden">
          <h3>
            How Does <span className="text-redX">Laser Skin Resurfacing</span>
            Work?
          </h3>
          <p className="text-lg font-300 pt-3">
            Laser skin resurfacing employs several types of laser technology to
            dissolve the molecular bonds of old or damaged skin cells layer by
            layer. As the damaged skin cells are peeled away, a younger and
            smoother layer of skin is revealed underneath.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LaserScroll;
