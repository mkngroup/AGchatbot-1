"use client";
import ChatService from "@/app/chat/chatservice";
import Message_Ui from "@/lib/components/chat/message";
import MessageBar from "@/lib/components/chat/messagebar";
import React, { createRef } from "react";

function page() {
  const { Service } = ChatService();
  const endRef = createRef();
  return (
    // <div className="h-full flex flex-col max-w-2xl mx-auto px-4 text-pretty pb-4 bg-red-300">
    //   <ul className="scrollbar flex-grow flex flex-col overflow-y-auto space-y-10 justify-end">
    //     {/* {Service.chat?.map((item, index) => {
    //   return (
    //     <Message_Ui
    //       key={index}
    //       message={item.content}
    //       type={item.from}
    //       ownername={"Aliyar Gasimli"}
    //     />
    //   );
    // })} */}

    //     <Message_Ui
    //       message={"Can you help me ?"}
    //       type={"user"}
    //       ownername={"Aliyar Gasimli"}
    //     />
    //     <Message_Ui message={"Yes I can help you"} type={"agchatbot"} />
    //     <Message_Ui
    //       message={"Can you help me ?"}
    //       type={"user"}
    //       ownername={"Aliyar Gasimli"}
    //     />
    //     <Message_Ui message={"Yes I can help you"} type={"agchatbot"} />
    //     <Message_Ui
    //       message={"Can you help me ?"}
    //       type={"user"}
    //       ownername={"Aliyar Gasimli"}
    //     />
    //     <Message_Ui message={"Yes I can help you"} type={"agchatbot"} />
    //     <Message_Ui
    //       message={"Can you help me ?"}
    //       type={"user"}
    //       ownername={"Aliyar Gasimli"}
    //     />
    //     <Message_Ui message={"Yes I can help you"} type={"agchatbot"} />
    //     <Message_Ui
    //       message={"Can you help me ?"}
    //       type={"user"}
    //       ownername={"Aliyar Gasimli"}
    //     />
    //     <Message_Ui message={"Yes I can help you"} type={"agchatbot"} />
    //     <Message_Ui
    //       message={"Can you help me ?"}
    //       type={"user"}
    //       ownername={"Aliyar Gasimli"}
    //     />
    //     <Message_Ui message={"Yes I can help you"} type={"agchatbot"} />
    //     {/* <Message_Ui message={"Yes I can help you"} type={"agchatbot"} />
    // <Message_Ui
    //   message={" Okey !"}
    //   type={"user"}
    //   ownername={"Aliyar Gasimli"}
    // />

    // <Message_Ui
    //   message={" Okey !"}
    //   type={"user"}
    //   ownername={"Aliyar Gasimli"}
    // />

    // <Message_Ui
    //   message={"Can you help me ?"}
    //   type={"user"}
    //   ownername={"Aliyar Gasimli"}
    // />
    // <Message_Ui message={"Yes I can help you"} type={"agchatbot"} />
    // <Message_Ui
    //   message={" Okey !"}
    //   type={"user"}
    //   ownername={"Aliyar Gasimli"}
    // />

    // <Message_Ui
    //   message={"Can you help me ?"}
    //   type={"user"}
    //   ownername={"Aliyar Gasimli"}
    // />
    // <Message_Ui message={"Yes I can help you"} type={"agchatbot"} />
    // <Message_Ui
    //   message={" Okey !"}
    //   type={"user"}
    //   ownername={"Aliyar Gasimli"}
    // />

    // <Message_Ui
    //   message={"Can you help me ?"}
    //   type={"user"}
    //   ownername={"Aliyar Gasimli"}
    // />
    // <Message_Ui message={"Yes I can help you"} type={"agchatbot"} />
    // <Message_Ui
    //   message={" Okey !"}
    //   type={"user"}
    //   ownername={"Aliyar Gasimli"}
    // />

    // <Message_Ui
    //   message={"Can you help me ?"}
    //   type={"user"}
    //   ownername={"Aliyar Gasimli"}
    // />
    // <Message_Ui message={"Yes I can help you"} type={"agchatbot"} />
    // <Message_Ui
    //   message={" Okey !"}
    //   type={"user"}
    //   ownername={"Aliyar Gasimli"}
    // />

    // <Message_Ui
    //   message={"Can you help me ?"}
    //   type={"user"}
    //   ownername={"Aliyar Gasimli"}
    // />
    // <Message_Ui message={"Yes I can help you"} type={"agchatbot"} />
    // <Message_Ui
    //   message={" Okey !"}
    //   type={"user"}
    //   ownername={"Aliyar Gasimli"}
    // />

    // <Message_Ui
    //   message={"Can you help me ?"}
    //   type={"user"}
    //   ownername={"Aliyar Gasimli"}
    // />
    // <Message_Ui message={"Yes I can help you"} type={"agchatbot"} />
    // <Message_Ui
    //   message={" Okey !"}
    //   type={"user"}
    //   ownername={"Aliyar Gasimli"}
    // />

    // <Message_Ui
    //   message={"Can you help me ?"}
    //   type={"user"}
    //   ownername={"Aliyar Gasimli"}
    // />
    // <Message_Ui message={"Yes I can help you"} type={"agchatbot"} />
    // <Message_Ui
    //   message={" Okey ! son"}
    //   type={"user"}
    //   ownername={"Aliyar Gasimli"}
    // /> */}
    //     <div ref={endRef} />
    //   </ul>
    //   <div>
    //     <MessageBar
    //       setMessageText={Service.handleuserMessage}
    //       MessageText={Service.userMessage}
    //       handleMessageSend={Service.handleMessageSend}
    //     />
    //   </div>
    // </div>
    <div className="bg-red-300 min-h-full h-full flex flex-col">
      <div className="bg-yellow-500 flex-grow overflow-y-auto">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
          libero aperiam deleniti laudantium ducimus? Dicta ipsa quo voluptate
          neque autem!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
          libero aperiam deleniti laudantium ducimus? Dicta ipsa quo voluptate
          neque autem!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
          libero aperiam deleniti laudantium ducimus? Dicta ipsa quo voluptate
          neque autem!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
          libero aperiam deleniti laudantium ducimus? Dicta ipsa quo voluptate
          neque autem!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
          libero aperiam deleniti laudantium ducimus? Dicta ipsa quo voluptate
          neque autem!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
          libero aperiam deleniti laudantium ducimus? Dicta ipsa quo voluptate
          neque autem!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
          libero aperiam deleniti laudantium ducimus? Dicta ipsa quo voluptate
          neque autem!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
          libero aperiam deleniti laudantium ducimus? Dicta ipsa quo voluptate
          neque autem!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
          libero aperiam deleniti laudantium ducimus? Dicta ipsa quo voluptate
          neque autem!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
          libero aperiam deleniti laudantium ducimus? Dicta ipsa quo voluptate
          neque autem!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
          libero aperiam deleniti laudantium ducimus? Dicta ipsa quo voluptate
          neque autem!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
          libero aperiam deleniti laudantium ducimus? Dicta ipsa quo voluptate
          neque autem!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
          libero aperiam deleniti laudantium ducimus? Dicta ipsa quo voluptate
          neque autem!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
          libero aperiam deleniti laudantium ducimus? Dicta ipsa quo voluptate
          neque autem!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
          libero aperiam deleniti laudantium ducimus? Dicta ipsa quo voluptate
          neque autem!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
          libero aperiam deleniti laudantium ducimus? Dicta ipsa quo voluptate
          neque autem!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
          libero aperiam deleniti laudantium ducimus? Dicta ipsa quo voluptate
          neque autem!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
          libero aperiam deleniti laudantium ducimus? Dicta ipsa quo voluptate
          neque autem!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
          libero aperiam deleniti laudantium ducimus? Dicta ipsa quo voluptate
          neque autem!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
          libero aperiam deleniti laudantium ducimus? Dicta ipsa quo voluptate
          neque autem!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
          libero aperiam deleniti laudantium ducimus? Dicta ipsa quo voluptate
          neque autem!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
          libero aperiam deleniti laudantium ducimus? Dicta ipsa quo voluptate
          neque autem!
        </p>
      </div>
      <div className="bg-blue-500 min-h-min">message box</div>
    </div>
  );
}

export default page;
