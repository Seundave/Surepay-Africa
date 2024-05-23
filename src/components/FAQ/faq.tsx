"use client";

import { useState } from "react";
import faqData from "./data";

function Faq() {
  const [expandedItem, setExpandedItem] = useState(null);

  const toggleItem = (itemId: any) => {
    setExpandedItem((prevItem) => (prevItem === itemId ? null : itemId));
  };
  return (
    <div className="bg-[#FAFBFF] p-[80px] gap-3">
      <div>
        <h4 className="text-[48px] text-[#19184E] font-bold text-center">
          Frequently Asked Questions
        </h4>
      </div>
      <div className="flex flex-wrap w-full justify-between px-[10px] md:px-[80px] py-[70px]">
        {faqData.map((item) => (
          <div key={item.id} className={`w-full md:w-[45%] p-4 rounded mb-4`}>
            <div
              className="flex justify-between items-center cursor-pointer border-gray-200 border-[1px] shadow-md p-4"
              onClick={() => toggleItem(item.id)}
            >
              <div className="w-[80%]">
                <h3 className="md:text-[16px] text-[10px] font-semibold">
                  {item.question}
                </h3>
              </div>
              <div className="w-[20%] flex justify-end">
                <span
                  className={`text-xl ${
                    expandedItem === item.id ? "rotate-45" : "rotate-0"
                  } transition-transform`}
                >
                  +
                </span>
              </div>
            </div>
            {expandedItem === item.id && (
              <div className="mt-2 bg-[#FFFFFF] p-4 rounded shadow-md">
                <p className="md:text-[16px] text-[10px] text-black">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
