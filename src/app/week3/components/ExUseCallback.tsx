import { useState, useCallback } from "react";

export default function ExUseCallback() {
  const [value, setValue] = useState("Change me");

  //<React.ChangeEventHandler<HTMLInputElement>> 작성 안 해도 타입 추론 가능함
  //strict 모드에서는 작성 안 하면 오류 발생
  const handleChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>(
    (event) => {
      setValue(event.currentTarget.value);
    },
    [setValue]
  );

  return (
    <>
      <p>
        <b>useCallback Hook</b>
      </p>
      <input value={value} onChange={handleChange} />
      <p>Value: {value}</p>
    </>
  );
}
