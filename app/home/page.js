import Image from "next/image";
import React from "react";

const Home1 = () => {
  return (
    <div className="h-screen w-full bg-black text-white flex justify-center items-center">
      <div className="flex-col justify-center items-center space-y-9 ">
        <Image
          src="/logo.png"
          alt="logo"
          width={100}
          height={100}
          className="mx-auto"
        />
        <h1 className="text-4xl lg:text-6xl">Welcome! to Coding Raja Technologies</h1>
      </div>
    </div>
  );
};

export default Home1;
