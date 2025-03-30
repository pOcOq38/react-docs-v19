"use client";
import MyButton from "./components/MyButton";
import ExUseStateHook from "./components/ExUseStateHook";

export default function week3() {
  return (
    <div>
      <h1>React Component Types</h1>
      <MyButton title="I'm a disabled button" disabled={true} />
      <br />
      <MyButton title="I'm a button" disabled={false} />
      <br />
      <ExUseStateHook />
    </div>
  );
}
