"use client";
import { UserChats } from "@/lib/database/chats";
import Link from "next/link";
import { FaGooglePlay } from "react-icons/fa";
import { PiClipboardText } from "react-icons/pi";
import React, { useEffect, useState } from "react";
import { redirect, useRouter } from "next/navigation";
import { useAuthContext } from "@/lib/context/auth.context";
import LoadingClientSide from "@/lib/components/loading/loading";
import { googleSignIn } from "@/lib/auth/authtypes";
import {
  getUserChatsFirestore,
  removeChatFirestore,
} from "@/lib/functions/firestore.functions";
import { IoTrashOutline } from "react-icons/io5";
export default function ChatLayout({ children }) {
  const { user, loading, SignOut } = useAuthContext();
  const [LOADING, setLOADING] = useState(true);
  const [chats, setchats] = useState([]);
  const router = useRouter();

  const handleNewChat = () => {
    router.push("/chat");
  };

  const getChats = async () => {
    await getUserChatsFirestore(user.uid, setchats);
  };

  const removeChat = async () => {};

  useEffect(() => {
    if (!loading) {
      if (user === undefined || user === null) {
        redirect("/");
      } else {
        setLOADING(false);
        getChats();
      }
    }
  }, [user, loading]);

  if (LOADING) {
    return <LoadingClientSide />;
  }
  return (
    <main className="grid grid-cols-10 h-dvh overflow-hidden">
      {/* nav */}
      <div className="col-span-2 h-dvh flex flex-col text-white  bg-[#000000]">
        {/* ust */}
        <div className="w-full py-2 px-5">
          {/* Handle click on "New chat" button */}
          <button
            onClick={handleNewChat}
            className="w-full flex items-center py-[12px] px-2 justify-between rounded-md hover:bg-[#202123]"
          >
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
            {chats?.map((item, key) => {
              return (
                <div
                  key={key}
                  className="relative w-full flex items-center justify-between py-[8px] px-2 space-x-1 rounded-md text-sm text-nowrap overflow-hidden hover:bg-[#202123]"
                >
                  <button
                    onClick={() => {
                      router.push(`/chat/${item.docId}`);
                    }}
                    className=" p-1 "
                  >
                    {item.chatname}
                  </button>
                  <button
                    onClick={() => {
                      removeChatFirestore(user.uid, item.docId);
                    }}
                    className=" text-xl  min-w-min absolute right-0 bg-black"
                  >
                    <IoTrashOutline />
                  </button>
                </div>
                // <Link
                //   href={`/chat/${item.docId}`}
                //   key={key}
                //   className="group relative flex items-center justify-end"
                // >
                //   <button className="w-full flex items-center py-[10px] px-2 justify-between rounded-md text-sm text-nowrap overflow-hidden hover:bg-[#202123]">
                //     {item.chatname}
                //   </button>
                //   <button
                //     // onClick={() => removeChatFirestore(user.uid, item.docId)}
                //     className="absolute bg-black min-w-min p-1 hidden group-hover:block hover:bg-[#202123] transition-all ease-in-out duration-150"
                //   >
                //     <IoTrashOutline />
                //   </button>
                // </Link>
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
                <p className="text-left text-nowrap">{user?.displayName}</p>{" "}
                {/* Display user's display name */}
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
        <main className="scrollbar flex-1 h-full overflow-y-hidden">
          {children}
        </main>
        <div className="w-full max-h-max max-w-2xl mx-auto  pb-2">
          <p className="text-gray-500 text-center text-xs font-medium mt-3">
            AG Chatbot can make mistakes. Consider checking important
            information.
          </p>
        </div>
      </div>
      {user ? (
        <button
          onClick={SignOut}
          className="absolute top-0 right-0 mt-4 mr-4 bg-red-500 text-white py-2 px-4 rounded-md "
        >
          Sign Out
        </button>
      ) : (
        <button
          onClick={googleSignIn}
          className="absolute top-0 right-0 mt-4 bg-blue-500 text-white py-2 px-4 rounded-md"
        >
          Sign In with Google
        </button>
      )}
    </main>
  );
}
