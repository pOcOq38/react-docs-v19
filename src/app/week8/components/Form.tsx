"use client";

import { useState } from "react";

export default function Form() {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState<Error | null>(null);
  const [status, setStatus] = useState("typing"); //typing(isEmpty, isTyping), submitting(isSubmitting), success(isSuccess, isError)
  //불필요한 state 변수 const [isEmpty, setIsEmpty] = useState(false);
  //불필요한 state 변수 const [isTyping, setIsTyping] = useState(false);
  //불필요한 state 변수 const [isSubmitting, setIsSubmitting] = useState(false);
  //불필요한 state 변수 const [isSuccess, setIsSuccess] = useState(false);
  //불필요한 state 변수 const [isError, setIsError] = useState(false);

  if (status === "success") {
    return <h1>That's right</h1>;
  }
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    try {
      await submitForm(answer);
      setStatus("success");
    } catch (err) {
      setStatus("typing");
      setError(err as Error);
    }
  }
  function handelTextareaChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setAnswer(e.target.value);
  }
  return (
    <>
      <h2>City quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handelTextareaChange}
          disabled={status === "submitting"}
        />
        <br />
        <button disabled={status === "submitting" || answer.length === 0}>
          Submit
        </button>
        {error !== null && <p className="Error">{error.message}</p>}
      </form>
    </>
  );
}

function submitForm(answer: string): Promise<void> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== "lima";
      if (shouldError) {
        reject(new Error("Good guess but a wrong answer. Try again!"));
      } else {
        resolve();
      }
    }, 1500);
  });
}
