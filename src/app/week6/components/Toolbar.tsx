"use client";
import AlertButton from "./AlertButton";
import Button from "./Button";
import PlayButton from "./PlayButton";
import Signup from "./Signup";
import UploadButton from "./UploadButton";

export default function Toolbar() {
  return (
    <div>
      <h3>이벤트 핸들러 추가하기</h3>
      <Button onClick={() => alert("You clicked me!")}>Click me</Button>
      <h3>이벤트 핸들러 내에서 Prop 읽기 </h3>
      <AlertButton message={"Playing!"}>Play Movie</AlertButton>
      <AlertButton message={"Uploading!"}>Upload Image</AlertButton>
      <h3>이벤트 핸들러를 Prop으로 전달하기</h3>
      <PlayButton movieName={"Kiki's Delivery Service"}></PlayButton>
      <UploadButton />
      <h3>이벤트 전파</h3>
      <div
        className="Toolbar"
        onClick={() => {
          alert("You clicked on the toolbar!");
        }}
      >
        <button onClick={() => alert("Playing!")}>Play Movie</button>
        <button onClick={() => alert("Uploading!")}>Upload Image</button>
      </div>
      <h3>이벤트 전파 막기</h3>
      <div
        className="Toolbar"
        onClick={() => {
          alert("You clicked on the toolbar!");
        }}
      >
        <Button onClick={() => alert("Playing!")}>Play Movie</Button>
        <Button onClick={() => alert("Uploading!")}>Upload Image</Button>
      </div>
      <h3>단계별 이벤트 캡쳐</h3>
      <div
        onClick={() => console.log("👉 div의 일반 onClick")}
        onClickCapture={() => {
          console.log("캡처에서 실행됨!");
        }}
      >
        <button onClick={(e) => e.stopPropagation()} />
        <button onClick={(e) => e.stopPropagation()} />
      </div>
      <h3>기본 동작 방지하기</h3>
      <Signup />
    </div>
  );
}
