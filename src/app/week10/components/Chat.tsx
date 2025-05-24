"use client";
import { useState, useRef } from "react";

export default function Chat() {
  const [text, setText] = useState("");
  const [isSending, setIsSending] = useState(false);

  //  let timeoutID = null; 지역변수 → 렌더링되면 null로 초기화 됨

  const timeoutRef = useRef<number | null>(null);

  function handleSend() {
    setIsSending(true);
    timeoutRef.current = window.setTimeout(() => {
      //ref는 렌더링 사이에 React가 값을 보존해줌
      alert("Sent!");
      setIsSending(false);
    }, 3000);
  }

  function handleUndo() {
    setIsSending(false);
    // clearTimeout(timeoutID); 초기화된 timeoutID를 사용해서 handleSend에서 설정된 timeoutID를 사용할 수 없음
    clearTimeout(timeoutRef.current ?? undefined); //리렌더되어도 handleSend에서 바꾼 값과 같은 값을 사용할 수 있음
  }

  return (
    <>
      <input
        disabled={isSending}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button disabled={isSending} onClick={handleSend}>
        {isSending ? "Sending..." : "Send"}
      </button>
      {isSending && <button onClick={handleUndo}>Undo</button>}
    </>
  );
}
