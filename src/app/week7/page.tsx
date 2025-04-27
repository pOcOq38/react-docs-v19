"use client";

import ArtworkForm from "./components/ArtworkForm";
import BucketList from "./components/BucketList";
import Counter from "./components/Counter";
import Counter2 from "./components/Counter2";
import Form from "./components/Form";
import MovingDot from "./components/MovingDot";
import PersonForm from "./components/PersonForm";
import RequestTracker from "./components/RequestTracker";
import SculptorList from "./components/SculptorList";
import TrafficLight from "./components/TrafficLight";

export default function week7() {
  return (
    <>
      <Form />
      <Counter />
      <h2>챌린지 도전하기</h2>
      <TrafficLight />
      <h2>state 업데이트 큐</h2>
      <Counter2 />
      <h2>챌린지 도전하기</h2>
      <RequestTracker />
      {/*<MovingDot />*/}
      <h2>객체 State 업데이트 하기</h2>
      <PersonForm />
      <ArtworkForm />
      <h2>배열 State 업데이트 하기</h2>
      <SculptorList />
      <BucketList />
    </>
  );
}
