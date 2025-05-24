import React, { useRef } from "react";

function MyInput({ ref }: { ref: React.Ref<HTMLInputElement> }) {
  return <input ref={ref} />;
}

export default function MyForm() {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleClick() {
    inputRef.current?.focus();
  }

  return (
    <>
      <MyInput ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
    </>
  );
}
