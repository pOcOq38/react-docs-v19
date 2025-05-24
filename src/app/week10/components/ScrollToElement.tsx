"use client";
import { useRef } from "react";

export default function ScrollToElement() {
  const myRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (myRef.current) {
      myRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <button onClick={handleScroll}>Go to Target</button>
      <div style={{ height: "400px" }} />

      <div ref={myRef} style={{ height: "200px", background: "lightblue" }}>
        🎯 Target Element
      </div>
    </div>
  );
}
