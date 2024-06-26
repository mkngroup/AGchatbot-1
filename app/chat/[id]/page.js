"use client";
import React, { createRef, useEffect } from "react";
import Message_Ui from "@/lib/components/chat/message";
import MessageBar from "@/lib/components/chat/messagebar";
import ChatService from "../chatservice";
import { useAuthContext } from "@/lib/context/auth.context";

function page({ params }) {
  const { Service } = ChatService();
  const { user } = useAuthContext();
  const endRef = createRef();

  const scrollToBottom = () => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    Service.getChatFirestore(params.id);
    Service.setChatIdFirestore(params.id);
    scrollToBottom();
    console.log(params.id);
  }, []);
  useEffect(() => {
    scrollToBottom();
  }, [Service.chat]);
  return (
    <div className="min-h-full h-full flex flex-col max-w-2xl mx-auto text-pretty pb-4 px-4">
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
      <br />
      <MessageBar
        setMessageText={Service.handleuserMessage}
        MessageText={Service.userMessage}
        handleMessageSend={Service.handleMessageSend}
      />
    </div>
  );
}

export default page;
