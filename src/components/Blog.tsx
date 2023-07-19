import React from "react";
import First from "../../public/images/B_A_G_1.png";
import Second from "../../public/images/B_A_G_2.png";
import Third from "../../public/images/B_A_G_3.png";
import Fourth from "../../public/images/B_A_G_4.png";
import Fifth from "../../public/images/B_A_G_5.png";
import Sixth from "../../public/images/B_A_G_6.png";
import Image from "next/image";

type Props = {};

const b = [
  {
    id: 1,
    url: First,
    name: "Flawless Skincare: Unlocking Radiant Skin",
    details:
      "Discover the Secrets to Beautiful Skin: Expert advice, tips, and product recommendations to help you...",
    date: "January 20, 2023",
  },
  {
    id: 2,
    url: Second,
    name: "The Ultimate Guide to Healthy, Glowing Skin",
    details:
      "Welcome to our Skincare Hub: Your go-to resource for all things skincare, offering in-depth articles, product...",
    date: "January 20, 2023",
  },
  {
    id: 3,
    url: Third,
    name: "Transform Your Skin: Effective Skincare Hacks",
    details:
      "Say Goodbye to Skin Issues: Explore our collection of skincare tips and tricks designed to address...",
    date: "January 20, 2023",
  },
];

const Blog = (props: Props) => {
  return (
    <section className="py-10">
      <div className="flex flex-col items-center">
        <p className="text-redX ">FEATURED POSTS</p>
        <h3 className="text-4xl">From Our Blog</h3>
      </div>
      <div className="grid grid-cols-auto-fit gap-10 container mx-auto px-3">
        {b.map((x) => (
          <div className=" flex flex-col gap-3 min-w-[300px] py-8" key={x.id}>
            <Image
              src={x.url}
              alt={x.name}
              width={500}
              className="border-8 border-white aspect-auto shadow-2xl"
            />
            <h4 className="text-start line-clamp-2 text-3xl">{x.name}</h4>
            <h5 className="text-start text-lg font-300 line-clamp-2">
              {x.details}
            </h5>
            <div className="flex justify-between items-center pt-10">
              <p className="text-redX font-400">{x.date}</p>
              <button className="border-2 border-redX px-5 py-2 text-redX">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
