"use client";
import React, { createRef, useEffect, useState } from "react";
import { useAuthContext } from "@/lib/context/auth.context";
import MessageBar from "@/lib/components/chat/messagebar";
import ChatService from "./chatservice";
import Message_Ui from "@/lib/components/chat/message";

export default function Chat() {
  const { user, loading, SignOut } = useAuthContext();
  const { Service } = ChatService();

  const endRef = createRef();
  const scrollToBottom = () => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  }, []);
  useEffect(() => {
    scrollToBottom();
  }, [Service.chat]);

  return (
    <div className="min-h-full h-full flex flex-col max-w-2xl mx-auto text-pretty pb-4 px-4">
      {Service.chat.length === 0 ? (
        <>
          <p className="mt-16 text-2xl font-semibold text-center">
            How can I help you today?
          </p>
          <div className="grid grid-cols-2 gap-6 w-full mt-16">
            <div className="border rounded-md flex flex-col border-gray-300 p-3 hover:bg-gray-100 ">
              <h3 className="text-sm font-medium font-sans text-gray-700">
                Come up with concepts
              </h3>
              <p className="text-xs font-sans text-gray-500">
                for a retro-style arcade game
              </p>
            </div>
            <div className="border rounded-md flex flex-col border-gray-300 p-3 hover:bg-gray-100 ">
              <h3 className="text-sm font-medium font-sans text-gray-700">
                Come up with concepts
              </h3>
              <p className="text-xs font-sans text-gray-500">
                for a retro-style arcade game
              </p>
            </div>
            <div className="border rounded-md flex flex-col border-gray-300 p-3 hover:bg-gray-100 ">
              <h3 className="text-sm font-medium font-sans text-gray-700">
                Come up with concepts
              </h3>
              <p className="text-xs font-sans text-gray-500">
                for a retro-style arcade game
              </p>
            </div>
            <div className="border rounded-md flex flex-col border-gray-300 p-3 hover:bg-gray-100 ">
              <h3 className="text-sm font-medium font-sans text-gray-700">
                Come up with concepts
              </h3>
              <p className="text-xs font-sans text-gray-500">
                for a retro-style arcade game
              </p>
            </div>
          </div>
        </>
      ) : null}

      <ul className="scrollbar flex-grow overflow-y-auto flex flex-col space-y-10 ">
        {Service.chat?.map((item, index) => {
          return (
            <Message_Ui
              key={index}
              message={item.content}
              type={item.role}
              ownername={user?.displayName}
            />
          );
        })}

        <div ref={endRef} />
      </ul>

      <MessageBar
        setMessageText={Service.handleuserMessage}
        MessageText={Service.userMessage}
        handleMessageSend={Service.handleMessageSend}
      />
    </div>
  );
}
