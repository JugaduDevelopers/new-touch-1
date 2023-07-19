import Image from "next/image";
import React from "react";
import logo from "../../public/images/footer-logo.png";

export default function Footer() {
  return (
    <>
      <div className="bg-darkred text-whiteX">
        <div className="container mx-auto">
          <footer className="grid-cols-auto-fit grid gap-2 items-center sm:justify-items-center py-10">
            <Image src={logo} alt="Logo" />
            <div>
              <h4>Treatments</h4>
              <ul className="list-disc">
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
            </div>
            <div>
              <h4>Contact</h4>
              <ul>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
            </div>
            <div className="h-full">
              <h4>Branch</h4>
              <ul>
                <li className="flex gap-2">
                  <Image
                    src={"/images/location.svg"}
                    alt="Location"
                    width={18}
                    height={18}
                  />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
                  cum.
                </li>
                <li className="flex gap-2">
                  <Image
                    src={"/images/location.svg"}
                    alt="Location"
                    width={18}
                    height={18}
                  />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
                  cum.
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </div>
      <p className="flex justify-center items-center">
        © Copyright 2023 - All Rights Reserved
      </p>
    </>
  );
}
