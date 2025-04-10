import { useState } from "react";

type RequestState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: any }
  | { status: "error"; error: Error };

export default function ExUseStateHook() {
  const [requestState, setRequestState] = useState<RequestState>({
    status: "idle",
  });
  const handleClick = () => {
    setRequestState({ status: "loading" });
  };
  return (
    <div>
      <p>
        <b>useState Hook</b>
      </p>
      <button onClick={handleClick}>
        {requestState.status === "loading" ? "Loading..." : "Load data"}
      </button>
    </div>
  );
}
