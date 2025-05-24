"use client";

import { useRef } from "react";

export default function Counter() {
  let ref = useRef(0);

  function handleCheck() {
    ref.current = ref.current + 1;

    alert("You clicked " + ref.current + " times!");
  }

  return <button onClick={handleCheck}>Click me!</button>;
}
