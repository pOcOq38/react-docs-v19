"use client";
import { useState } from "react";

export default function Counter2() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [number3, setNumber3] = useState(0);

  return (
    <>
      <p>다음 렌더링 전에 동일한 state 변수를 여러 번 업데이트하기</p>
      <h1>{number1}</h1>
      <button
        onClick={() => {
          setNumber1((n) => n + 1);
          setNumber1((n) => n + 1);
          setNumber1((n) => n + 1);
        }}
      >
        +3
      </button>
      <p>state를 교체한 후 업데이트하면 어떻게 되나요? </p>
      <h1>{number2}</h1>
      <button
        onClick={() => {
          setNumber2(number2 + 5);
          setNumber2((n) => n + 1);
        }}
      >
        Increase the number
      </button>

      <p>업데이트 후 state를 바꾸면 어떻게 되나요? </p>
      <h1>{number3}</h1>
      <button
        onClick={() => {
          setNumber3(number3 + 5);
          setNumber3((n) => n + 1);
          setNumber3(42);
        }}
      >
        Increase the number
      </button>
    </>
  );
}
