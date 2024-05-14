import { useEffect, useState } from "react";

export default function ChatService() {
  const [userMessage, setuserMessage] = useState("");
  const [answerMessage, setanswerMessage] = useState("");

  const [chat, setchat] = useState([]);

  const handleuserMessage = (e) => {
    setuserMessage(e.target.value);
  };
  const handleMessageSend = async () => {
    if (userMessage.length > 0) {
      try {
        setchat((x) => [...x, { content: userMessage, from: "user" }]);
        setuserMessage("");
        const response = await fetch("/api/openai", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ userMessage: userMessage }),
        });
        const res = await response.json();
        if (res.status === "success") {
          const ansmessage = res.completion.choices[0].message.content;
          setanswerMessage(ansmessage);
          setchat((x) => [...x, { content: ansmessage, from: "assintance" }]);
        } else if (res.status === "error") {
          console.log(res.message);
        }

        console.log(res.completion.choices[0].message.content);
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  const Service = {
    handleuserMessage,
    userMessage,
    handleMessageSend,
    answerMessage,
    chat,
  };
  return { Service };
}
