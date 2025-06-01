"use client";
import { useState, useRef, useEffect } from "react";

interface VideoPlayerProps {
  src: string;
  isPlaying: boolean;
}

function VideoPlayer({ src, isPlaying }: VideoPlayerProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isPlaying) {
      console.log("video.play() 호출");
      ref.current?.play();
    } else {
      console.log("video.pause() 호출");
      ref.current?.pause();
    }
  }, [isPlaying]); //의존성 배열로 [isPlaying]을 지정하면 React에게 이전 렌더링 중에 isPlaying이 이전과 동일하다면 Effect를 다시 실행하지 않도록 해야 한다고 알려줍니다.

  return <video ref={ref} src={src} loop playsInline />;
}

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [text, setText] = useState("");
  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? "일시 정지" : "재생"}
      </button>
      <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
    </>
  );
}
