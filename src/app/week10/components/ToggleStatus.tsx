import { useState, useRef } from "react";

export default function ToggleStatus() {
  const [show, setShow] = useState(true);
  const ref = useRef<HTMLParagraphElement>(null);

  return (
    <div>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Toggle with setState
      </button>
      <button
        onClick={() => {
          ref.current?.remove();
        }}
      >
        Remove from the DOM
      </button>
      {show && <p ref={ref}>Hello world</p>}
    </div>
  );
}
