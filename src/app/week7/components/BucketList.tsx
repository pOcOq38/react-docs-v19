"use client";
import { useState } from "react";

// Artwork 타입 정의
interface Artwork {
  id: number;
  title: string;
  seen: boolean;
}

let nextId = 3;

// 초기 리스트 데이터 타입을 맞추기 위해 Artwork 타입을 사용
const initialList: Artwork[] = [
  { id: 0, title: "Big Bellies", seen: false },
  { id: 1, title: "Lunar Landscape", seen: false },
  { id: 2, title: "Terracotta Army", seen: true },
];

export default function BucketList() {
  const [myList, setMyList] = useState<Artwork[]>(initialList);
  const [yourList, setYourList] = useState<Artwork[]>(initialList);

  function handleToggleMyList(artworkId: number, nextSeen: boolean): void {
    const myNextList = [...myList];
    const artwork = myNextList.find((a) => a.id === artworkId);
    if (artwork) {
      artwork.seen = nextSeen;
      setMyList(
        myList.map((artwork) => {
          if (artwork.id === artworkId) {
            return { ...artwork, seen: nextSeen };
          } else {
            return artwork;
          }
        })
      );
    }
  }

  function handleToggleYourList(artworkId: number, nextSeen: boolean): void {
    const yourNextList = [...yourList];
    const artwork = yourNextList.find((a) => a.id === artworkId);
    if (artwork) {
      artwork.seen = nextSeen;
      setYourList(yourNextList);
    }
  }

  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemList artworks={myList} onToggle={handleToggleMyList} />
      <h2>Your list of art to see:</h2>
      <ItemList artworks={yourList} onToggle={handleToggleYourList} />
    </>
  );
}

// ItemList 컴포넌트에 prop 타입을 지정
interface ItemListProps {
  artworks: Artwork[];
  onToggle: (artworkId: number, nextSeen: boolean) => void;
}

function ItemList({ artworks, onToggle }: ItemListProps) {
  return (
    <ul>
      {artworks.map((artwork) => (
        <li key={artwork.id}>
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={(e) => {
                onToggle(artwork.id, e.target.checked);
              }}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
}
