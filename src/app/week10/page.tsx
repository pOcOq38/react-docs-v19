"use client";

import CatFriends from "./components/CatFriends";
import Chat from "./components/Chat";
import ChatRoom from "./components/ChatRoom";
import Counter from "./components/Counter";
import Dashboard from "./components/Dashboard";
import Form from "./components/Form";
import MyForm from "./components/MyForm";
import ScrollToElement from "./components/ScrollToElement";
import Stopwatch from "./components/Stopwatch";
import Toggle from "./components/Toggle";
import ToggleStatus from "./components/ToggleStatus";

export default function week10() {
  return (
    <>
      <Counter />
      <br />
      <Stopwatch />
      <br />
      <Chat />
      <br />
      <Toggle />
      <br />
      <Dashboard />
      <br />
      <Form />
      <br />
      <ScrollToElement />
      <br />
      <CatFriends />
      <br />
      <MyForm />
      <br />
      <ToggleStatus />
      <br />
      <ChatRoom />
    </>
  );
}
