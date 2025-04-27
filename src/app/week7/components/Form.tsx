"use client";
import { useState } from "react";
export default function Form() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState("Hello!");
  const [to, setTo] = useState("Alice");

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    setTimeout(() => {
      alert(`You said ${message} to ${to}`);
    }, 5000);
  }

  if (isSent) {
    //3. 컴포넌트 재 렌더링
    return <h1>Your message is on its way!</h1>;
  }
  return (
    <>
      <h3>Form1</h3>
      <form
        onSubmit={(e) => {
          //1. onSubmit 동작
          e.preventDefault();
          setIsSent(true); //2. isSent true로 설정
          sendMessage(message);
        }}
      >
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
      <h3>Form2</h3>
      <form onSubmit={handleSubmit}>
        <label>
          To:{" "}
          <select value={to} onChange={(e) => setTo(e.target.value)}>
            <option value="Alice">Alice</option>
            <option value="Bob">Bob</option>
          </select>
        </label>
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </>
  );
}

function sendMessage(message: string) {}
