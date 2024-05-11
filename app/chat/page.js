"use client";
import React, { useState } from "react";

import { useAuthContext } from "@/lib/context/auth.context";
import { googleSignIn } from "@/lib/auth/authtypes";
import { BsSend } from "react-icons/bs";
import MessageBar from "@/lib/components/chat/messagebar";
import ChatService from "./chatservice";

export default function Chat() {
  const { user, loading, SignOut } = useAuthContext()
  const [chatHistory, setChatHistory] = useState([]);
  const { setMessageText, MessageText } = ChatService()








  return (

    <div className="max-w-2xl mx-auto h-full overflow-hidden flex flex-col items-center justify-between px-2 pb-4 ">
      <div className="flex-1 flex flex-col items-center mt-16">
        {/* <FcGoogle className="text-4xl" /> */}
        <p className="mt-6 text-2xl font-semibold">How can I help you today?</p>
      </div>

      {user ? (
        <button onClick={SignOut} className="absolute top-0 right-0 mt-4 mr-4 bg-red-500 text-white py-2 px-4 rounded-md ">
          Sign Out
        </button>
      ) : (
        <button onClick={googleSignIn} className="absolute top-0 right-0 mt-4 bg-blue-500 text-white py-2 px-4 rounded-md">
          Sign In with Google
        </button>
      )}

      {/* chat history */}
      <div className="flex flex-col mt-4 w-full">
        {chatHistory.map((message, index) => (
          <div key={index} className={`p-2 my-1 ${message.fromUser ? "bg-blue-200 self-end" : "bg-gray-200"}`}>
            <p className="text-sm">{message.text}</p>
          </div>
        ))}
      </div>



      <MessageBar setMessageText={setMessageText} MessageText={MessageText} />
    </div>
  );
}
