"use client";

import { useState } from "react";
import { initialTravelPlan } from "../data/places";
import PlaceTree from "./PlaceTree";
import type { TravelPlan } from "../types/types";

export default function TravelPlan() {
  const [plan, setPlan] = useState<TravelPlan>(initialTravelPlan);

  //completion추가
  function handleComplete(parentId: number, childId: number) {
    const parent = plan[parentId]; // plan에서 parentId로 부모 노드

    const nextParent = {
      ...parent, //부모 노드를 복사
      childIds: parent.childIds.filter((id) => id !== childId), //childIds에서 childId를 제거한 새로운 부모 노드를 생성
    };

    setPlan({
      ...plan, //plan복사
      [parentId]: nextParent, //parentId에 해당하는 노드를 nextParent로 덮어써서 업데이트
    });
  }

  const root = plan[0];
  const planetIds = root.childIds;
  return (
    <>
      <h2>Places to visit</h2>
      <ol>
        {planetIds.map((id) => (
          <PlaceTree
            key={id}
            id={id}
            parentId={0}
            placesById={plan}
            onComplete={handleComplete}
          />
        ))}
      </ol>
    </>
  );
}
