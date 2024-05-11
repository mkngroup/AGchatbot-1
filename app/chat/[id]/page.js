import React from "react";
import Message_Ui from "@/lib/components/chat/message";

function page({ params }) {
  return (
    <div className="scrollbar max-w-2xl mx-auto h-full px-4 text-pretty pb-4 ">
      <ul className="flex flex-col space-y-10 justify-end h-full">

        <Message_Ui
          message={"Can you help me ?"}
          type={"user"}
          ownername={"Aliyar Gasimli"}
        />
        <Message_Ui message={"Yes I can help you"} type={"agchatbot"} />
        <Message_Ui message={" Okey !"} type={"user"} ownername={"Aliyar Gasimli"} />
      </ul>
    </div>
  );
}

export default page;
