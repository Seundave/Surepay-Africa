import { firstImage, secondImage } from "@/assets/Hero";
import Image from "next/image";

function Hero() {
  return (
    <div className="px-[80px] relative h-[92vh] bg-[#3345AF] flex justify-center">
      <div className="md:max-w-[760px] flex flex-col items-center justify-center">
        <h3 className="text-[60px] text-white font-bold text-center">
          Secure Escrow Payments for Social Commerce in Africa
        </h3>
        <p className="text-white md:max-w-[600px] text-center">
          Never buy or sell online without Surepay. Trust Us to protect your
          online transactions and promote a safe e-commerce experience.
        </p>
        <div className="absolute top-[60%] left-0 transform -translate-y-1/2">
          <Image src={firstImage} alt="first-image" />
        </div>
        <div className="absolute top-[60%] right-0 transform -translate-y-1/2">
          <Image src={secondImage} alt="second-image" />
        </div>
        <div className="w-full mt-[20px] p-[12px]">
          <form className="bg-white p-[50px] rounded-md">
            <p className="mb-[5px]">I am</p>
            <div className="border-[1px] border-[#F2F2F2] p-3 rounded-md flex">
              <div className="relative mr-4">
                <select className="appearance-none outline-none w-full py-2 pr-8 pl-3 rounded-md border border-gray-300">
                  <option value="">Selling</option>
                  <option value="">Selling</option>
                  <option value="">Selling</option>
                  <option value="">Selling</option>
                  <option value="">Selling</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="relative flex-1">
                <select className="appearance-none outline-none w-full py-2 pr-8 pl-3 rounded-md border border-gray-300">
                  <option value="">Phones, Shoes, Accessories</option>
                  <option value="">Phones, Shoes, Accessories</option>
                  <option value="">Phones, Shoes, Accessories</option>
                  <option value="">Phones, Shoes, Accessories</option>
                  <option value="">Phones, Shoes, Accessories</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <p className="mt-[15px] mb-[5px]">For</p>
            <div className="border-[1px] border-[#F2F2F2] p-3 rounded-md flex">
              <div className="relative mr-4 ">
                <select className="appearance-none outline-none w-full py-2 pr-8 pl-3 rounded-md border border-gray-300">
                  <option value="">₦</option>
                  <option value="">₦</option>
                  <option value="">₦</option>
                  <option value="">₦</option>
                  <option value="">₦</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="relative flex-1">
                <select className="appearance-none outline-none w-full py-2 pr-8 pl-3 rounded-md border border-gray-300">
                  <option value="">Phones, Shoes, Accessories</option>
                  <option value="">Phones, Shoes, Accessories</option>
                  <option value="">Phones, Shoes, Accessories</option>
                  <option value="">Phones, Shoes, Accessories</option>
                  <option value="">Phones, Shoes, Accessories</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <button className="flex bg-[#3736A7] rounded-md w-full text-white p-3 justify-center">
              <p className="">Get Started</p>
              <img src="" alt="" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Hero;
