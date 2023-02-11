"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";

function Login() {
  return (
    <div className="bg-[#11A37F] flex flex-col items-center justify-center text-center h-screen">
      <Image
        src="https://links.papareact.com/2i6"
        width={300}
        height={225}
        alt="logo"
        priority={true}
      />
      <button
        onClick={() => signIn("google")}
        className="text-3xl font-bold text-white animate-pulse"
      >
        Sign In to use ChatGPT
      </button>
    </div>
  );
}

export default Login;
