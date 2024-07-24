"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Home = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const router = useRouter();
  //form submission
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      if (password !== confirmPassword) {
        toast.error("Password and Confirm Password not matching!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        return;
      }

      const res = await fetch("/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      const data = await res.json();
      if (data.message === "success") {
        toast.success("SignUp Successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        router.push("/signin");
      }
      if (data.message === "Email already exists") {
        toast.error("Email already exists!", {
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
      if (data.message === "Something went wrong") {
        toast.error("Something went wrong!", {
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
          <h1 className="text-2xl lg:text-3xl font-bold">Sign Up </h1>

          <Image src={"/logo.png"} alt="logo" width={60} height={60} />
        </div>

        <p className="text-base ">Create a New Account to get started.</p>
        <form
          onSubmit={handleSubmit}
          className=" px-12 space-y-4 flex-col gap-3"
        >
          <input
            onChange={(e) => setname(e.target.value)}
            className="w-full border-2 rounded-md px-2 py-1 outline-none"
            type="text"
            placeholder="Name"
            required
          />
          <input
            onChange={(e) => setemail(e.target.value)}
            className="w-full border-2 rounded-md px-2 py-1 outline-none"
            type="email"
            placeholder="Enter your email"
            required
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border-2 rounded-md px-2 py-1 outline-none"
            type="password"
            placeholder="Enter your password"
            required
          />
          <input
            onChange={(e) => setconfirmPassword(e.target.value)}
            className="w-full border-2 rounded-md px-2 py-1 outline-none"
            type="password"
            placeholder="Confirm password"
            required
          />
          <button
            className="w-full bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded-md "
            type="submit"
          >
            Sign Up
          </button>
        </form>
        <div>
          {" "}
          Already have an account?
          <Link href={"/signin"}>
            {" "}
            <span className="text-purple-900 font-semibold">Sign In </span>{" "}
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Home;
