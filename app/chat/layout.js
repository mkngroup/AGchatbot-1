"use client";
import { UserChats } from "@/lib/database/chats";
import Link from "next/link";
import { FaGooglePlay } from "react-icons/fa";
import { PiClipboardText } from "react-icons/pi";
import { BsSend } from "react-icons/bs";
import { v4 as uuidv4 } from 'uuid'; // Import uuidv4 for generating unique message IDs

import React, { useEffect, useState } from "react";

import { redirect, usePathname } from 'next/navigation'; // Import usePathname from next/navigation
import { useAuthContext } from "@/lib/context/auth.context";

export default function ChatLayout({ children }) {
  const { user, loading } = useAuthContext()
  const [LOADING, setLOADING] = useState(true)


  useEffect(() => {
    if (!loading) {
      if (user === undefined || user === null) {
        redirect('/')
      } else {
        setLOADING(false)
      }
    }
  }, [user, loading])



  // Function to handle creating a new message
  const handleNewChat = () => {
    // Generate a unique message ID
    const messageId = uuidv4();
    // Redirect to the new chat page with the generated message ID
    window.location.href = `/chat/${messageId}`;
  };
  if (LOADING) {
    return (
      <div className="absolute top-0 right-0 w-full h-full bg-blue-500 text-white"></div>
    )
  }
  return (
    <main className="grid grid-cols-10 h-dvh overflow-hidden">
      {/* nav */}
      <div className="col-span-2 h-dvh flex flex-col text-white  bg-[#000000]">
        {/* ust */}
        <div className="w-full py-2 px-5">
          {/* Handle click on "New chat" button */}
          <button onClick={handleNewChat} className="w-full flex items-center py-[12px] px-2 justify-between rounded-md hover:bg-[#202123]">
            <div className="flex items-center">
              <FaGooglePlay className="text-2xl mr-3" />
              New chat
            </div>
            <PiClipboardText className="text-2xl" />
          </button>
        </div>
        {/* menu */}
        <div className="scrollbar px-5 h-full  overflow-y-auto pt-4">
          <ul className="flex flex-col space-y-2">
            {UserChats?.map((item, key) => {
              return (
                <Link href={`/chat/${item.id}`} key={key}>
                  <button className="w-full flex items-center py-[10px] px-2 justify-between rounded-md text-sm text-nowrap overflow-hidden hover:bg-[#202123]">
                    {item.title}
                  </button>
                </Link>
              );
            })}
          </ul>
        </div>
        {/* alt */}
        <div className="w-full py-2 px-5">
          <Link href={"/chat"}>
            <button className="w-full flex items-center py-[12px] px-2 justify-between rounded-md hover:bg-[#202123]">
              <div className="flex items-center">
                <img
                  src="https://res.cloudinary.com/dnfmvs2ci/image/upload/v1655840887/User-Profile-PNG-High-Quality-Image_lck0kw.png"
                  alt=""
                  className="h-[40px] w-[40px] mr-3"
                />
                <p className="text-left text-nowrap">{user?.displayName}</p> {/* Display user's display name */}
              </div>
            </button>
          </Link>
        </div>
      </div>
      {/* main */}
      <div className="col-span-8 h-dvh flex flex-col">
        <p className="p-5 text-xl tracking-tight font-sans font-semibold">
          AG Chatbot 1.0
        </p>
        <main className="scrollbar h-full overflow-y-auto">{children}</main>
        <div className="w-full max-h-max max-w-2xl mx-auto  pb-2">
          {/* search bar */}
          {/* <div className="relative flex items-center justify-center">
            <textarea
              name=""
              id=""
              rows="1"
              placeholder="Message ChatBot"
              className="tascrollbar w-full py-4 px-4 pr-14  text-xl rounded-2xl border border-[#D9D9D9] resize-none focus:outline-none focus:border-[#acabab]"
            />
            <button className="absolute   p-2 right-3">
              <BsSend className="text-3xl" />
            </button>
          </div> */}

          <p className="text-gray-500 text-center text-xs font-medium mt-3">
            AG Chatbot can make mistakes. Consider checking important
            information.
          </p>
        </div>
        {/* <p className="p-5 text-xl tracking-tight font-sans font-semibold">
          AG Chatbot 1.0
        </p> */}
      </div>
    </main>
  );
}
