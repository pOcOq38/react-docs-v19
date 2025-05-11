"use client";
import { useState } from "react";

export default function AddField() {
  const [fields, setFields] = useState<string[]>([""]);

  const handleFieldChange = (index: number, value: string) => {
    const newFields = [...fields];
    newFields[index] = value;
    setFields(newFields);
  };

  const addField = () => {
    setFields([...fields, ""]);
  };

  const handelSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`제출된 값: ${fields.join(", ")}`);
  };
  return (
    <form onSubmit={handelSubmit}>
      <p>동적 입력 폼</p>
      {fields.map((field, index) => (
        <div key={index}>
          <label>필드 {index + 1}</label>
          <input
            type="text"
            value={field}
            onChange={(e) => handleFieldChange(index, e.target.value)}
            style={{ marginBottom: "8px" }}
          />
          <button type="button" onClick={addField}>
            Add Field
          </button>
        </div>
      ))}
    </form>
  );
}
