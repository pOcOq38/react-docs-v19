"use client";
import { useState } from "react";

export default function NameForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const fullName = firstName + " " + lastName;

  function handleFirstNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setLastName(e.target.value);
  }

  return (
    <>
      <h2>Let’s check you in</h2>
      <label>
        First name: <input value={firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Last name: <input value={lastName} onChange={handleLastNameChange} />
      </label>
      <p>
        Your ticket will be issued to: <b>{fullName}</b>
      </p>
    </>
  );
}
