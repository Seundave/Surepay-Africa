import { logo } from "@/assets/Navbar";
import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <div className="flex justify-between h-[8vh] px-[80px] items-center">
      <div className="w-[80%] flex gap-8">
        <Link href={"/"}>
          <Image src={logo} alt="logo" />
        </Link>

        <ul className="flex items-center gap-8 text-[14px]">
          <Link href={"/"}>
            <li>Home</li>
          </Link>
          <Link href={"/product"}>
            <li>Products</li>
          </Link>
          <Link href={"/resources"}>
            <li>Resources</li>
          </Link>
          <Link href={"/pricing"}>
            <li>Pricing</li>
          </Link>
        </ul>
      </div>
      <div className="">
        <ul className="flex items-center text-[14px]">
          <Link href={"/login"}>Log in</Link>
          <Link href={"/sign-up"}>
            <button className="py-2 px-5 bg-[#FF7F5C] ml-[20px] text-white rounded ">
              Sign up
            </button>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;
