"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";


function Login() {
  return (
    <div className="bg-[#91C8E4] h-screen flex flex-col items-center 
    justify-center text-center">
        {/* <Image
            src="https://links.papareact.com/5me"
            width={300}
            height={300}
            alt="logo"
        /> */}
        <button onClick={() => signIn('google')} 
        className="text-white font-bold text-3xl animate-pulse">
            Sign in to use ChatGPT
        </button>
    </div>
  );
}

export default Login;