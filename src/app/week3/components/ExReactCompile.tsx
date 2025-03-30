"use client";

import { ChangeEventHandler, useState } from "react";
import { NameView } from "./NameView";
import { AgeView } from "./AgeView";

export default function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const handleChangeName: ChangeEventHandler<HTMLInputElement> = (e) => {
    setName(e.target.value);
  };

  const handleChangeAge: ChangeEventHandler<HTMLInputElement> = (e) => {
    setAge(Number(e.target.value));
  };

  return (
    <main className="flex flex-col py-10 justify-center items-center">
      <p>
        <b>React Compile</b>
      </p>
      <label>
        name{" "}
        <input
          type="text"
          value={name}
          onChange={handleChangeName}
          className="border p-2"
        />
      </label>
      <label>
        age{" "}
        <input
          type="number"
          value={age}
          onChange={handleChangeAge}
          className="border p-2"
        />
      </label>

      <hr />

      <NameView name={name} />
      <AgeView age={age} />
    </main>
  );
}
