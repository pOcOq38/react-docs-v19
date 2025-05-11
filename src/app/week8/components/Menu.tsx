"use client";
import React, { useState } from "react";

const initialItems = [
  { title: "pretzels", id: 0 },
  { title: "crispy seaweed", id: 1 },
  { title: "granola bar", id: 2 },
];

export default function Menu() {
  const [items, setItems] = useState(initialItems);
  //const [selectedItem, setSelectedItem] = useState(items[0]);
  // ㄴ> selectedItem의 내용이 items 목록 내의 항목 중 하나와 동일한 객체로 중복됨

  // 1. selectedId를 state로 유지
  const [selectedId, setSelectedId] = useState(0);
  //2. items 배열에서 해당 ID의 항목을 검색하여 selectedItem을 가져옴.
  const selectedItem = items.find((item) => item.id === selectedId);

  function handleItemChange(
    id: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            title: e.target.value,
          };
        } else {
          return item;
        }
      })
    );
  }

  return (
    <>
      <h2>What's your travel snack?</h2>
      <ul>
        {items.map((item, index) => (
          <li key={item.id}>
            <input
              value={item.title}
              onChange={(e) => {
                handleItemChange(item.id, e);
              }}
            />{" "}
            <button
              onClick={() => {
                setSelectedId(item.id);
              }}
            >
              Choose
            </button>
          </li>
        ))}
      </ul>
      {selectedItem ? (
        <p>You picked {selectedItem.title}.</p>
      ) : (
        <p>You haven't picked anything.</p> //selectedItem undefined일 경우 분기 처리
      )}
    </>
  );
}
