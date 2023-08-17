import Image from "next/image";
import React from "react";
import Girl from "../../public/images/girl.png";
import BG1 from "../../public/images/bg1.png";
import BG2 from "../../public/images/bg2.png";
import Consultation from "../components/consultation";
import GetAQuote from "../components/GetAQuote";
import Different from "../components/Different";
import First from "../../public/images/Diff_1.jpg";
// import TestimonialContainer from "@/components/TestimonialContainer";
import TestimonialContainer from "../components/TestimonialContainer";
import Footer from "../components/Footer";
// import Plus from "./lhr-plus.svg";
// import Person from "./lhr-person.svg";
// import World from "./lhr-world.svg";
// import Last from "./lhr-last.svg";
// import Google from "./bottom-google.svg";
// import Fb from "./bottom-fb.svg";
// import Jd from "./bottom-jd.svg";
import logo from "../../public/images/footer-logo.png";
import google from "../../public/images/google.png";
import justdial from "../../public/images/justdial.png";
import facebook from "../../public/images/facebook.png";
import Link from "next/link";

type Props = {};

const LandingPage1 = (props: Props) => {
  return (
    <>
      <header className="bg-redX">
        <div className="container mx-auto max-md:px-5 py-3 md:px-28 ">
          <a href="https://newtouch.in/" target="_blank">
            <Image
              src={logo}
              height={100}
              width={100}
              alt="Logo"
              // className="max-md:hidden ml-10"
            />
          </a>
        </div>
      </header>
      <section className=" bg-[#D24648] px-5 pt-6 xl:pt-0 pb-5 lg:h-[500px] xl:h-[650px]">
        <div className="relative container mx-auto  bg-[#D24648]">
          <h1 className=" hidden xl:block  absolute top-0 left-[12%]  text-gradient text-[100px] min-[1100px]:text-[130px] min-[1200px]:text-[160px] min-[1295px]:text-[180px] leading-[120%] font-900 text-center">
            TREATMENT
          </h1>
          <div className="xl:absolute xl:top-36 xl:left-[15%] flex flex-col sm:flex-row items-center  justify-between">
            <div>
              <h3 className="text-[18px] font-900 uppercase leading-[120%]">
                <span className="text-white">SkinCare -</span> Assistt
              </h3>
              <h1 className=" text-[50px] md xl:text-[65px] font-900 leading-[120%]">
                <span className="text-white">Laser Hair Removal</span> <br /> in
                Ahmedabad
              </h1>
              <h5 className="text-[25px] text-white font-900 leading-[120%]">
                We do more Laser Hair Reduction than anyone else.
              </h5>
            </div>
            <div>
              <Image src={Girl} alt="girl" />
            </div>
          </div>
        </div>
      </section>
      <GetAQuote />
      <section className="max-sm:pt-3 pb-5">
        <div className="overflow-hidden">
          <hr className="h-px mb-4 bg-black border-0" />
          <h1 className="scrolling-text text-6xl text-[#FFD7D7]">
            30% Off Your Journey to Flawless Skin: Laser Resurfacing, Unveil
            Your Radiance!
          </h1>
          <hr className="h-px  bg-black border-0" />
        </div>
        <div className="flex justify-center items-center mt-10">
          <div className="max-w-5xl px-5">
            <h3 className="text-[35px] font-700 leading-[120%] ">
              Now, there is a better solution to <br /> remove unwanted hair
            </h3>
            <p className="text-[25px] font-400 leading-[120%]  py-2">
              <span className="text-redX font-700">New Touch Skin Care</span>'s
              laser hair reduction unit is equipped with
              <span className="text-redX font-700">
                {" "}
                LightSheer® INFINITY™ and Deka Moveo technology{" "}
              </span>
              which opens up a world of infinite laser treatment possibilities.
              Clients from asian ethnic backgrounds and with different skin
              types are increasingly demanding solutions that are tailored to
              their needs.
            </p>
            <p className="text-[25px] font-400 leading-[120%] py-2">
              <span className="text-redX font-700">
                The LightSheer® INFINITY™ and Deka Moveo technology{" "}
              </span>
              is a breakthrough in hair reduction and provides a highly
              effective, rapid, safe and comfortable treatment. It can also
              offer your patients a solution for pigmented and vascular lesions,
              PFB (Pseudofolliculitus barbae a.k.a. razor bumps).
            </p>
          </div>
        </div>
      </section>
      <section className="bg-darkred ">
        <div className="container mx-auto pt-10 pb-5 px-5">
          <div className="">
            <h5 className="text-[14px] font-700 leading-[120%] uppercase text-white text-center">
              Desired procedure to begin
            </h5>
            <h3 className="text-[35px] font-700 leading-[120%] uppercase text-white text-center">
              Before After Gallery
            </h3>
          </div>
          <div className="grid grid-cols-auto-fit gap-10">
            <div>
              <Image src={BG2} alt="csdv" />
            </div>
            <div>
              <Image src={BG1} alt="csdv" />
              <div className="flex bg-white py-1">
                <div className="flex-1 text-center font-700">Before</div>
                <div className="flex-1 text-center font-700">After</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-auto  mb-3 flex items-center justify-center">
        <div className="container mx-auto flex flex-col-reverse px-5 max-lg:mb-20 lg:flex-row  xl:justify-center items-center lg:gap-16 xl:gap-32">
          <div className="pt-4 pr-10 sm:pt-0">
            <div>
              <Image
                src={First}
                alt="First"
                className="aspect-square w-[250px] box sm:w-[320px] lg:w-[450px]"
              />
            </div>
            <div></div>
          </div>
          <div className="max-w-2xl flex flex-col py-5 lg:pt-28 pb-5 ">
            <p className="text-redX uppercase lg:text-lg xl:text-[14px]">
              HOW IT WORKS
            </p>
            <h2 className=" text-3xl xl:text-5xl">How Does it Works</h2>
            <p className="text-base xl:text-lg pt-3 ">
              Lasers generate energy in the hair shaft, which diffuses to the
              matrix targets to cause desired damage. It means when pigment in
              hair follicles absorbs the light emitted by the LASER system. The
              laser vaporizes hair pigment, eliminating or significantly slowing
              hair's growth.
            </p>

            <p className=" text-black uppercase py-3 text-lg lg:text-xl xl:text-[35px]">
              Treatment Time and Recovery
            </p>
            <p className="text-base xl:text-lg ">
              The number of treatments required depends on several factors
              including hair and skin type. Laser hair removal treats hair in an
              active growth phase. Since all hairs are not in this phase at the
              same time, more than one treatment may be necessary for better
              results. Most patients tolerate laser hair removal treatment well.
              However, because some areas of the body are more sensitive,
              topical anaesthesia is available. You may return to normal
              activity right away, but redness and swelling occur in some
              patients which goes in a few hours or a day or two.
            </p>
          </div>
        </div>
      </section>

      <TestimonialContainer />
      <div className="flex flex-col items-center justify-center py-10">
        <h3 className="px-5">Why LHR at New Touch Hair Care?</h3>
        <div className="flex  items-center sm:justify-around justify-center px-5 container mx-auto sm:pt-16 pt-10 gap-5 flex-wrap">
          <div className="flex flex-col sm:items-start items-center ">
            <h3 className="text-redX">15000+</h3>
            <p>Happy Clients</p>
          </div>
          <span className="px-[1px] py-10 bg-line md:block hidden"></span>
          <div className="flex flex-col sm:items-start items-center ">
            <h3 className="text-redX">95%</h3>
            <p>Retention Rate</p>
          </div>
          <span className="px-[1px] py-10 bg-line md:block hidden"></span>
          <div className="flex flex-col sm:items-start items-center ">
            <h3 className="text-redX">4.7 star</h3>
            <p>Customer Reviews</p>
          </div>
        </div>
      </div>
      <div className="flex-col item-center justify-center mb-20 ">
        <h3 className="text-center mb-10">People really like us!</h3>
        <div className="flex-wrap   flex gap-10 mx-auto justify-center  items-center px-3">
          <div className="border-2 rounded-2xl p-5 h-40 w-80 border-redX">
            <Image src={google} alt={"google"} />
          </div>
          <div className="border-2 rounded-2xl p-5 h-40 w-80 border-redX">
            <Image src={facebook} alt={"facebook"} />
          </div>
          <div className="border-2 rounded-2xl p-5 w-80 h-40 border-redX">
            <Image src={justdial} alt={"justdial"} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage1;
