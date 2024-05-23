import { mockup } from "@/assets/Choose";
import Image from "next/image";
import { data } from "./data";

function Choose() {
  return (
    <div className="bg-[#3734A9]  pt-[70px]">
      <div className="px-[80px] flex justify-between">
        <h4 className="text-[30px] text-white font-bold">
          Why Choose Surepay Africa?
        </h4>
        <button className="py-[10px] px-5 bg-[#FF7F5C] text-[15px]  text-white rounded">
          Create an account
        </button>
      </div>
      <div className="flex justify-between mt-[40px] w-full">
        <div className="w-[50%] pl-[80px] mb-[50px]">
          {data.map((item, index) => (
            <div className="flex gap-5 " key={item.id}>
              <div className="w-[80px] h-[45px] rounded-[92px] bg-[#312F91] flex justify-center items-center">
                <p className="text-white text-[24px] font-bold">{index + 1}</p>
              </div>
              <div className="flex flex-col gap-4 text-white">
                <p className="text-[20px] font-bold">{item.choice}</p>
                <p className="mb-[15px]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-[40%]">
          <Image src={mockup} alt="mockup" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}

export default Choose;
