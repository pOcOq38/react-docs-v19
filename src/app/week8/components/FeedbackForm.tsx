"use client";
import { useState } from "react";

export default function FeedbackForm() {
  const [text, setText] = useState("");
  //const [isSending, setIsSending] = useState(false);
  //const [isSent, setIsSent] = useState(false);
  //setIsSent와 setIsSending을 함께 호출하는 것을 잊어버린 경우,
  //isSending과 isSent가 동시에 true인 상황에 처할 수 있습니다.
  //=> status 변수로 변경
  const [status, setStatus] = useState("typing");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    //setIsSending(true);
    setStatus("sending");
    await sendMessage(text);
    //setIsSending(false);
    //setIsSent(true);
    setStatus("sent");
  }
  const isSending = status === "sending";
  const isSent = status === "sent";

  if (isSent) {
    return <h1>Thanks for feedback!</h1>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>How was your stay at The Prancing Pony?</p>
      <textarea
        disabled={isSending}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <br />
      <button disabled={isSending} type="submit">
        Send
      </button>
      {isSending && <p>Sending...</p>}
    </form>
  );
}

function sendMessage(text: string) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
}
