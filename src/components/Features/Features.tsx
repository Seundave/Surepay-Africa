import { featuresLogo } from "@/assets/Features";
import Image from "next/image";
import React from "react";
import { data } from "./data";

function Features() {
  return (
    <div className="p-[80px]">
      <div className="flex flex-col items-center gap-5">
        <div className=" rounded-md p-[5px] bg-[#F7F7FD]">
          <p className="text-[14px] text-[#3734A9] ">Features</p>
        </div>
        <div className="flex flex-col items-center">
          <h4 className="text-[48px] text-[#19184E] font-bold">
            Key Features of Surepay Africa
          </h4>
          <p>
            Figma ipsum component variant main layer. Layout device group
            distribute.
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex w-[40%]">
          <div className="w-[4px] h-auto  bg-[#F2F2F2]  rounded-[50px]">
            <div className="w-[4px] h-[100px] bg-[#3345AF] rounded-[50px]"></div>
          </div>
          <div className="ml-[30px]">
            {data.map((item) => (
              <div className="flex flex-col" key={item.id}>
                <p className="font-bold mb-[10px]">{item.title}</p>
                <p className="mb-[15px]">{item.feature}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[40%]">
          <Image src={featuresLogo} alt="features-image" />
        </div>
      </div>
    </div>
  );
}

export default Features;
