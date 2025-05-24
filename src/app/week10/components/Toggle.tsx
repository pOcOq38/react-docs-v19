"use client";
import { useState } from "react";

export default function Toggle() {
  //const isOnRef = useRef(false);
  const [isOn, setIsOn] = useState(false);

  return (
    <button
      onClick={() => {
        //isOnRef.current = !isOnRef.current;
        // isOnRef.current의 값은 버튼 클릭 시 바뀌지만, React는 그 값의 변경을 감지하지 않고, 다시 렌더링하지 않습니다.
        setIsOn(!isOn);
      }}
    >
      {/*{isOnRef.current ? 'On' : 'Off'}*/}
      {isOn ? "On" : "Off"}
    </button>
  );
}
