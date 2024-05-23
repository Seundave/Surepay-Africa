import React from "react";
import { data } from "./data";
import Image from "next/image";
import { quote } from "@/assets/Testimonials";

function Testimonials() {
  return (
    <div className="px-[80px] py-[30px]">
      <div className="flex flex-col items-center gap-5">
        <div className=" rounded-md p-[5px] bg-[#F7F7FD]">
          <p className="text-[14px] text-[#3734A9] ">Testimonials</p>
        </div>
        <div className="flex flex-col items-center">
          <h4 className="text-[48px] text-[#19184E] font-bold">
            Don’t just take our word for it.
          </h4>
          <p>
            Figma ipsum component variant main layer. Layout device group
            distribute variant
          </p>
        </div>
      </div>
      <div className="md:max-w--1280px] px-[30px] flex justify-between mt-[50px]">
        {data.map((item) => (
          <div className="w-[30%]" key={item.id}>
            <Image src={quote} alt="" />
            <p className="mt-[10px]">{item.testimony}</p>
            <Image src={item.photo} alt="" className="my-[20px]" />
            <p>{item.name}</p>
            <p className="my-[10px]">{item.role}</p>
            <Image src={item.review} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
