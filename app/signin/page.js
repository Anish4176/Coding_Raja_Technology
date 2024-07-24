"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {  toast } from 'react-toastify';
import { useRouter } from "next/navigation";

const SignIn = () => {
  const router = useRouter();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      
      const res = await fetch("/api/users/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
        const data = await res.json();
        if(data.success){
          toast.success('SignIn Successfully!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
            router.push('/home');
        }
        if(data.message==='Email not found'){
          toast.error('Email not found!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        }
        if(data.message==='Password is incorrect'){
          toast.error('Password is incorrect!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        }
        if(data.message==='Something went wrong'){
          toast.error('Password is incorrect', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
          
          
        }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <main className="h-screen w-full flex justify-center items-center bg-home">
      <div className="grid text-center gap-5 lg:w-[40vw] justify-center items-center bg-white px-4 py-8 rounded-md mx-10">
        <Image
          src="/logo.svg"
          alt="logo"
          width={100}
          height={100}
          className="mx-auto"
        />
        <div className="flex justify-center items-center">
          <h1 className="text-2xl lg:text-3xl font-bold">Sign In </h1>

          <Image src={"/logo.png"} alt="logo" width={60} height={60} />
        </div>

        
        
          <form action="" onSubmit={handleSubmit} className=" px-12 space-y-4 flex-col gap-3">
            <input
              onChange={(e) => setemail(e.target.value)}
              className="w-full border-2 rounded-md px-2 py-1 outline-none"
              type="email"
              placeholder="Enter your Email"
              required
            />
            <input
              onChange={(e) => setpassword(e.target.value)}
              className="w-full border-2 rounded-md px-2 py-1 outline-none"
              type="password"
              placeholder="Enter your Password"
              required
            />
            <button
            className="w-full bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded-md "
            type="submit"
          >
            Sign In
          </button>
          </form>
          <div>
          {" "}
          Not having an account?
          <Link href={"/"}>
            {" "}
            <span className="text-purple-900 font-semibold">Sign Up </span>{" "}
          </Link>
          
        </div>
        </div>
      
    </main>
  );
};

export default SignIn;
