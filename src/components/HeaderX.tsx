"use client";
import Image from "next/image";
import React, { useState } from "react";
import Newtouch from "../images/footer-logo.png";
import Menu from "../icons/menu.svg";
import Calendar from "../icons/calendar_red.svg";
import CloseMenuSvg from "../icons/close_menu.svg";
import Li from "./li";

type Props = {};

const SmallHeaderX = (props: Props) => {
  const [opens, setOpens] = useState(false);
  return (
    <nav
      className={` ${
        !opens ? "bg-darkred h-24" : "bg-[#FFEFEF] h-auto"
      } p-5 md:hidden`}
    >
      {!opens && (
        <div className="flex items-center justify-between">
          <Image src={Newtouch} alt="newTouch" width={70} height={70} />
          <button onClick={() => setOpens(true)}>
            <Menu width={40} height={40} />
          </button>
        </div>
      )}
      {opens && (
        <div>
          <div className="flex justify-between items-center">
            <button className=" border bg-[#FFDFDF] text-redX z-20 justify-center border-redX flex items-center py-2 px-4 gap-4">
              <Calendar />
              Book Appointment
            </button>
            <button onClick={() => setOpens(false)}>
              <CloseMenuSvg width="32px" />
            </button>
          </div>
          <hr className="border-[1px] border-black my-5 border-opacity-10 h-[1px]"></hr>
          <ul className="flex items-center flex-col gap-12">
            <Li isOpen={opens} setIsOpen={setOpens} />
          </ul>
          <div>
            <h4 className="text-redX text-xl mb-5 bg-white text-center">
              Our Treatments
            </h4>
            <ul className="list-none font-700 flex flex-col gap-1 text-sm">
              <li>Laser Hair Removal</li>
              <li>Acne Treatment</li>
              <li>Hair Loss</li>
              <li>Laser Facial</li>
              <li>Acne Scars</li>
              <li>PRP Treatment For Hair Loss</li>
              <li>Hair Transplant (AHT)</li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default SmallHeaderX;
