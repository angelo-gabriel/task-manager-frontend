'use client'

import { useContext } from "react"
import { ChatContext, Role } from "../context/chat"

export const useChat = () => {
  const context = useContext(ChatContext);

  if (!context) {
    throw new Error("useChat must be used within a ChatContextProvider");
  }

  const { messages, setMessage, streamMessage } =
    context;

  const sendMessage = async (message: string) => {
    setMessage(message, Role.USER);

    console.log("API URL:", `${process.env.NEXT_PUBLIC_API_PATH}/api/chat`);

    // send message to the server
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_PATH}/api/chat`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json, text/plain, */*",
        },
        body: JSON.stringify({ message: message.trim() }),
      }
    );

    if (!response.ok || !response.body) {
      throw response.statusText;
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();

    // eslint-disable-next-line no-constant-condition
    while (true) {
      const { done, value } = await reader.read();
      if (done) return;
      const chunk = decoder.decode(value, { stream: true });
      streamMessage(chunk);
    }
  };

  return { messages, sendMessage };
};