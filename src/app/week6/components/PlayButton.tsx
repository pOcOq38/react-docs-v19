"use client";

import Button from "./Button";

type PlayButtonProps = {
  movieName: string;
};

export default function PlayButton({ movieName }: PlayButtonProps) {
  function handlePlayClick() {
    alert(`Playing ${movieName}`);
  }
  return <Button onClick={handlePlayClick}>Play "{movieName}"</Button>;
}
