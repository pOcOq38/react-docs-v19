import { useState, useRef, useEffect } from "react";

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false); //state는 UI(버튼)에 쓰임
  const videoRef = useRef<HTMLVideoElement>(null); //<video> DOM 요소는 리액트 컴포넌트가 아니라 진짜 브라우저 DOM이기 때문에, React가 직접 조작할 수 X -> ref를 통해 DOM에 직접 접근해야 함

  function handleClick() {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);
  }

  // 상태가 바뀔 때 DOM 조작
  useEffect(() => {
    //React가 화면을 업데이트한 다음에 Effect가 실행
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.play();
    } else {
      video.pause();
    }
  }, [isPlaying]);

  return (
    <>
      <button onClick={handleClick}>{isPlaying ? "Pause" : "Play"}</button>
      <video ref={videoRef} width="250">
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
    </>
  );
}
