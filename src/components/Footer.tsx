import { facebook, github, linkedin, twitter } from "@/assets/Footer";
import { anotherLogo } from "@/assets/Navbar";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className="p-[80px]">
      <div className="w-full flex justify-between">
        <div className="flex flex-col  gap-3 w-[60%]">
          <div className="flex gap-2">
            <Image src={anotherLogo} alt="footer-logo" />
            <p className="text-[#0F172A] text-[18px]">Surepay</p>
          </div>
          <ul className="flex gap-8 text-[14px] ">
            <Link href={"/overview"}>Overview</Link>
            <Link href={"/features"}>Features</Link>
            <Link href={"/pricing"}>Pricing</Link>
            <Link href={"/careers"}>Careers</Link>
            <Link href={"/help"}>Help</Link>
            <Link href={"/privacy"}>Privacy</Link>
          </ul>
        </div>
        <div className=" flex flex-col gap-3 w-[30%]">
          <div className="">
            {" "}
            <p className="font-bold">Stay up to date</p>
          </div>

          <div className="flex">
            <input
              placeholder="Enter your email"
              className="border py-3 px-3  rounded outline-none"
            />
            <button className="ml-[30px] bg-[#FF7F5C] px-4 py-3 rounded-md text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <hr className="mt-[30px] mb-[20px]" />
      <div className="flex justify-between mt-[40px]">
        <div>
          <p>© 2023 Surepay Inc. All rights reserved.</p>
        </div>
        <div className="flex gap-5">
          <Image src={twitter} alt="twitter" />
          <Image src={linkedin} alt="twitter" />
          <Image src={facebook} alt="twitter" />
          <Image src={github} alt="twitter" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
