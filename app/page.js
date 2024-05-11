"use client";
import React, { useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from "./firebase";
import MayUi_Button from "@/lib/components/mayui/mayui_button";
import MayUi_Input from "@/lib/components/mayui/mayui_input";
import { FcGoogle } from "react-icons/fc";
import { onAuthStateChanged } from 'firebase/auth';
import { redirect, usePathname } from 'next/navigation'; // Import usePathname from next/navigation
import { googleSignIn } from "@/lib/auth/authtypes";
import { useAuthContext } from "@/lib/context/auth.context";

export default function Home() {
  const { user, loading } = useAuthContext()

  if (user) {
    redirect('/chat')
  }
  if (loading) {
    return (<div className="absolute top-0 right-0 w-full h-full bg-yellow-500 text-white"></div>)
  }

  return (
    <main className="h-dvh grid grid-cols-10">
      <div className="col-span-7 flex flex-col bg-green-200 p-5">
        {/* logo */}
        <nav className="">
          <a href="/">
            <h1 className="font-sans font-medium text-teal-900">AgChatbot</h1>
          </a>
        </nav>
        <div className="flex-1 flex flex-col justify-center  h-full">
          <p className="text-4xl font-sans font-semibold text-green-800">
            AgChatBot ile sohbet etmeye hazır mısınız? Size kişisel bir asistan olarak hizmet
            vermek ve ilginç konular hakkında sizinle sohbet etmek için buradayım.
          </p>
        </div>
      </div>
      <div className="col-span-3 flex flex-col items-center p-5 px-10 ">
        <div>
          <img
            src="https://res.cloudinary.com/dnfmvs2ci/image/upload/v1704476065/Screenshot_2024-01-05_203307_gv6nim.png"
            alt=""
            className="max-w-20"
          />
        </div>
        <h2 className="text-3xl font-bold font-sans mt-20">Welcome back</h2>
        <div className=" w-full flex flex-col space-y-5 mt-10">
          <MayUi_Input
            label={"Email address"}
            name={"emailaddress"}
            type={"text"}
            onChange={() => { }}
          />
          <MayUi_Button />
          <span className="text-center text-sm text-gray-400 font-medium font-sans">
            OR
          </span>
          <button onClick={googleSignIn} className="w-full flex items-center text-left tracking-wide text-sm font-semibold border border-green-600  bg-white text-gray-700 py-[17px] px-4 rounded">
            <FcGoogle className="text-2xl mr-3" />
            Continue with Google
          </button>

        </div>
      </div>
    </main>
  );
}
