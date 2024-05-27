"use client";
import { anotherLogo, logo } from "@/assets/Navbar";
import InputField from "@/reusuables/inputField";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from '@/utils/axios'

const registerSchema = yup.object().shape({
  name: yup.string().required("Full name is required"),
  email: yup.string().email().required("Email address is required"),
  phone: yup.string().required("Phone number is required"),
  password: yup.string().required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

function Login() {
  const [data, setData] = useState();

  const methods = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(registerSchema),
  });

  const {
    reset,
    setError,
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const onSubmit = async (data: any) => {
    console.log(data);
    // setLoading(true);
    const formattedData = {
      name: data.name,
      email: data.email,
      password: data.password,
      phone: data.phone,
    };

    try {
      const res = await axios.post("/auth/register", formattedData);
      // toast.success("Registration is successful!");
      localStorage.setItem("userEmail", formattedData.email);
      // setLoading(false);
      // navigate("/welcome", { replace: true });
    } catch (error) {
      // setLoading(false);
      // toast.error(error.response.data.message);
    }
  };
  return (
    <div className="max-w-[500px] mx-auto px-[30px]  py-[50px] h-auto  justify-center items-center flex flex-col border-[1px] shadow-md border-gray-300 rounded">
      <form
        className="w-full flex flex-col gap-3 "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col items-center">
          <Image src={logo} alt="another-logo" className=" mb-[20px]" />
        </div>

        <p className="text-center text-[20px] font-bold">
          Sign up into Surepay
        </p>
        <InputField
          label={"Email Address"}
          type="email"
          autocomplete="email"
          required={{ value: true, message: "Email is required" }}
          placeholder={"goldfish@gmail.com"}
          register={{ ...register("email") }}
          error={errors?.email?.message}
        />
        <InputField
          label={"Phone Number"}
          required={{ value: true, message: "Phone number is required" }}
          type="number"
          placeholder="080948484884"
          register={{ ...register("phone") }}
          error={errors?.phone?.message}
        />
        <InputField
          label={"Password"}
          type="password"
          autocomplete="password"
          required={{ value: true, message: "Password is required" }}
          placeholder={"Enter your password"}
          register={{ ...register("password") }}
          error={errors?.password?.message}
        />
        <InputField
          label={"Confirm password"}
          type="password"
          autocomplete="password"
          required={{ value: true, message: "Confirm password is required" }}
          placeholder={"Confirm your password"}
          register={{ ...register("confirmPassword") }}
          error={errors?.confirmPassword?.message}
        />
        <div className="w-full">
          <button
            className="text-center bg-[#3734A9] rounded text-white w-full md:h-[40px] mt-[20px]"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>
      <p className="text-[10px] text-center mt-[25px] md:mt-[30px] md:text-[16px]">
        Have an account?{" "}
        <Link href="/login" className="underline text-blue-600">
          Sign In
        </Link>
      </p>
    </div>
  );
}

export default Login;
