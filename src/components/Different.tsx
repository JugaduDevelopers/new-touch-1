import Image from "next/image";
import React from "react";
import First from "../../public/images/Diff_1.png";
import Second from "../../public/images/Diff_B.png";

type Props = {};

const Different = (props: Props) => {
  return (
    <div className="container mx-auto grid grid-cols-auto-fit gap-28 py-10 px-5">
      {/* <hr className="zig" />
      <hr className="zag" /> */}
      <div className="flex flex-col justify-center">
        <Image
          src={First}
          alt="First"
          width={700}
          className="border-8 z-10 border-white aspect-auto shadow-xl"
        />
        <div>
          {/* <Image
            src={Second}
            alt="First"
            width={650}
            className="absolute xl:top-16 xl:left-28 lg:top-28 lg:left-10 aspect-square shadow-xl"
          /> */}
        </div>
      </div>
      <div className="flex flex-col justify-start pt-16">
        <p className="text-redX uppercase">Why choose us</p>
        <h2>
          What makes us <span className="text-redX">Different</span> from others
        </h2>
        <p className="text-lg font-300 pt-3">
          This clinic offers a customized and holistic solution to a wide range
          of skin, hair. team consists of personally trained therapists, each
          looking after specific procedures. The front desk consists of a soft
          spoken Clinic Manager, who sees to it that the things are conducted in
          friendly manner. Also, we have a staff to
        </p>
        <ul className="list-disc pl-10">
          <li>We understand your skin.</li>
          <li>Highly experienced. Free conslitation.</li>
          <li>Usfda approve machine.</li>
          <li>Result oriented treatment.</li>
        </ul>
        <div>
          <button className=" bg-redX px-5 py-2 text-whiteX mt-5">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Different;
