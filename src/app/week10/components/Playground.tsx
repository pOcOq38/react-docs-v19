"use client";
import { useState, useEffect } from "react";

function Playground() {
  const [text, setText] = useState("a");

  useEffect(() => {
    function onTimeout() {
      console.log("⏰ " + text);
    }

    console.log('🔵 스케줄 로그 "' + text);
    const timeoutId = setTimeout(onTimeout, 3000);

    return () => {
      console.log('🟡 취소 로그 "' + text);
      clearTimeout(timeoutId);
    };
  }, [text]);

  return (
    <>
      <label>
        What to log:{" "}
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </label>
      <h1>{text}</h1>
    </>
  );
}

export default function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(!show)}>
        컴포넌트 {show ? "마운트 해제" : "마운트"}
      </button>
      {show && <hr />}
      {show && <Playground />}
    </>
  );
}
