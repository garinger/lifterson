"use client";

import { useState } from "react";
import Set from "./Set";

interface Props {
  name: string;
}

type Set = {
  number: number;
};

export default function Exercise({ name }: Props) {
  const [sets, setSets] = useState<Set[]>([]);
  const [setCount, setSetCount] = useState(0);

  function AddSet() {
    setSetCount(setCount + 1);
    let newSet: Set = { number: setCount };
    setSets([...sets, newSet]);
  }

  function DeleteSet(numberToDelete: number) {
    setSets(sets.filter((set) => set.number != numberToDelete));
  }

  return (
    <div className="flex justify-center p-4 m-4">
      <h1 className="bold">{name}</h1>
      <div>
        {sets.map((set) => (
          <Set key={set.number} number={set.number} deleteSet={DeleteSet} />
        ))}
        <button className="btn btn-wide" onClick={AddSet}>
          Add Set
        </button>
      </div>
    </div>
  );
}
