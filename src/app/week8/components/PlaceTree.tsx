"use client";

import { useState } from "react";
import type { Place } from "../types/types";

type PlaceTreeProps = {
  id: number;
  parentId: number;
  placesById: { [key: number]: Place };
  onComplete: (parentId: number, childId: number) => void;
};

export default function PlaceTree({
  id,
  parentId,
  placesById,
  onComplete,
}: PlaceTreeProps) {
  const place = placesById[id];
  const childIds = place.childIds;
  return (
    <li>
      {place.title}
      <button
        onClick={() => {
          onComplete(parentId, id);
        }}
      >
        Complete
      </button>
      {childIds.length > 0 && (
        <ol>
          {childIds.map((childId) => (
            <PlaceTree
              key={childId}
              id={childId}
              parentId={id}
              placesById={placesById}
              onComplete={onComplete}
            />
          ))}
        </ol>
      )}
    </li>
  );
}
