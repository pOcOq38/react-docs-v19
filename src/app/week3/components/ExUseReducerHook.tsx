import { useReducer } from "react";

interface State {
  count: number;
}

type CounterAction =
  | { type: "reset" }
  | { type: "setCount"; value: State["count"] }; //setCount 액션으로 value를 받아서 State의 count를 업데이트

const initialState: State = { count: 0 }; //count를 0으로 초기화

function stateReducer(state: State, action: CounterAction): State {
  switch (action.type) {
    case "reset":
      return initialState;
    case "setCount":
      return { ...state, count: action.value };
    default:
      throw new Error("Unknown action");
  }
}

const ExUseReducerHook = () => {
  //useReducer은 stateReducer 함수와 initialState를 인자로 받아서 dispatch 함수를 반환
  //state는 현재 상태, dispatch는 상태를 변경하는 액션을 전달하는 함수
  const [state, dispatch] = useReducer(stateReducer, initialState); //useReducer<State> 명시적으로 준 경우
  const addFive = () => dispatch({ type: "setCount", value: state.count + 5 });
  const reset = () => dispatch({ type: "reset" });

  return (
    <div>
      <p>
        <b>useReducer Hook</b>
      </p>
      <p>Count: {state.count}</p>
      <button onClick={addFive}>Add 5</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default ExUseReducerHook;
