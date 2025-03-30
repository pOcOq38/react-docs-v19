"use client";
import MyButton from "./components/MyButton";
import ExUseStateHook from "./components/ExUseStateHook";
import ExUseReducerHook from "./components/ExUseReducerHook";
import ExUseContext from "./components/ExUseContext";
import ExUseMemo from "./components/ExUseMemo";
import ExReactCompile from "./components/ExReactCompile";
import ExUseCallback from "./components/ExUseCallback";
export default function week3() {
  return (
    <div>
      <p>
        <b>React Component Types</b>
      </p>
      <MyButton title="I'm a disabled button" disabled={true} />
      <MyButton title="I'm a button" disabled={false} />
      <ExUseStateHook />
      <ExUseReducerHook />
      <ExUseContext />
      <ExUseMemo />
      <ExUseCallback />
      <ExReactCompile />
    </div>
  );
}
