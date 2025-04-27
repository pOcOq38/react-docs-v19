"use client";
import { useState } from "react";

type Artist = { id: number; name: string };

let nextId = 0;
export default function SculptorList() {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState<Artist[]>([]);
  return (
    <>
      <h1>Inspiring Sculptors:</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button
        onClick={() => {
          setArtists([...artists, { id: nextId++, name: name }]);
        }}
      >
        Add
      </button>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>
            {artist.name}{" "}
            <button
              onClick={() => {
                setArtists(artists.filter((a) => a.id !== artist.id));
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
