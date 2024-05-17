import { useAuthContext } from "@/lib/context/auth.context";
import {
  addNewChatFirestore,
  addNewMessageFirestore,
  getUserMessageFirestore,
  updateChatTitleFirestore,
} from "@/lib/functions/firestore.functions";
import { serverTimestamp } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ChatService() {
  const { user } = useAuthContext();
  const router = useRouter();
  const [userMessage, setuserMessage] = useState("");
  const [answerMessage, setanswerMessage] = useState("");
  const [chatid, setchatid] = useState(null);

  const [chat, setchat] = useState([]);

  const handleuserMessage = (e) => {
    setuserMessage(e.target.value);
  };
  const handleMessageSend = async () => {
    const chatLength = chat.length;
    const usermessage = { content: userMessage, role: "user" };

    if (userMessage.length > 0) {
      try {
        setchat((x) => [...x, { content: userMessage, role: "user" }]);
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
          const assistantmessage = { content: ansmessage, role: "assistant" };
          const bulkmessage = [usermessage, assistantmessage];

          setanswerMessage(ansmessage);
          setchat((x) => [...x, { content: ansmessage, role: "assistant" }]);

          if (chatLength > 0 && chatid != null) {
            for (const item of bulkmessage) {
              item.createdAt = serverTimestamp();
              const { status, id } = await addNewMessageFirestore(
                user.uid,
                chatid,
                item
              );
              console.log(status, id);
            }
          } else {
            console.log(chatLength, chatid);
            await createNewChat(bulkmessage, "New Chat");
          }
        } else if (res.status === "error") {
          console.log(res.message);
        }

        console.log(res.completion.choices[0].message.content);
      } catch (error) {
        console.log(error);
      }
    }
  };
  const createNewChat = async (messages, chatname) => {
    const chatMeta = {
      chatname: chatname,
      createdAt: serverTimestamp(),
    };
    try {
      const { status, id: chatId } = await addNewChatFirestore(
        user.uid,
        chatMeta
      );
      if (status === "success" && chatId != undefined) {
        setchatid(chatId);
        if (messages.length > 0) {
          for (const item of messages) {
            if (item.role === "assistant") {
              const generatedTitle = await generateTitle(item.content);
              await updateChatTitleFirestore(user.uid, chatId, generatedTitle);
            }
            item.createdAt = serverTimestamp();
            const { status, id } = await addNewMessageFirestore(
              user.uid,
              chatId,
              item
            );
          }
          return router.push(`/chat/${chatId}`);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const generateTitle = async (topic) => {
    const message = `konuyu bana maximum 3 kelime ile (karakter sayisi 50 ni gecmeden)  ilgili chat basligi uretirmisin? Kisa ve oz olsun lutfen. Baslikta "...chat basligi" kelimelerini kullanma. Konu:${topic}`;

    const response = await fetch("/api/openai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ userMessage: message }),
    });

    const res = await response.json();

    if (res.status === "success") {
      const title = res.completion.choices[0].message.content;
      return title;
    }
  };

  const getChatFirestore = async (chatId) => {
    const { status, data } = await getUserMessageFirestore(user.uid, chatId);

    if (status === "success") {
      setchat(data);
    }
  };
  const setChatIdFirestore = async (chatId) => {
    setchatid(chatId);
  };

  const Service = {
    handleuserMessage,
    userMessage,
    handleMessageSend,
    answerMessage,
    chat,
    getChatFirestore,
    setChatIdFirestore,
  };
  return { Service };
}
