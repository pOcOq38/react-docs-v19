// "use client";는 클라이언트 측에서만 동작하게 합니다.
"use client";

import { createRoot } from "react-dom/client";
import { useEffect } from "react";

function Image() {
  return (
    <img
      src="https://i.imgur.com/ZF6s192.jpg"
      alt="'Floralis Genérica' by Eduardo Catalano: a gigantic metallic flower sculpture with reflective petals"
    />
  );
}

export default function Page() {
  const rootElement = document.getElementById("root");
  if (rootElement) {
    const root = createRoot(rootElement);
    root.render(<Image />);
  }
  return <div id="root"></div>;
}
