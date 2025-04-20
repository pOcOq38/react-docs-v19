"use client";

import Gallery from "./components/Gallery";
import Toolbar from "./components/Toolbar";
import "./styles.css";
import { createRoot } from "react-dom/client";

export default function week6() {
  return (
    <>
      <h2>이벤트 핸들러</h2>
      <Toolbar />
      <h2>State: 컴포넌트의 기억 저장소</h2>
      <Gallery />
      <h3>State는 독립적임</h3>
      <Gallery />
    </>
  );
}
