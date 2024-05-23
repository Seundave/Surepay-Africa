import {
  discord,
  google,
  monday,
  shopify,
  slack,
  spotify,
} from "@/assets/Brands";
import Image from "next/image";

function Brands() {
  return (
    <div className="bg-[#FAFBFF] py-[100px] flex flex-col items-center px-[80px] gap-10">
      <p className="text-[20px] font-bold">Trusted by global brands</p>
      <div className="md:max-w-[1036px] mx-auto  h-[88px] flex flex-wrap items-center gap-8">
        <Image src={google} alt="google" />
        <Image src={shopify} alt="shopify" />
        <Image src={slack} alt="slack" />
        <Image src={spotify} alt="spotify" />
        <Image src={monday} alt="monday" />
        <Image src={discord} alt="discord" />
      </div>
    </div>
  );
}

export default Brands;
