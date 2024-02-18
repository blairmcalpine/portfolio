"use client";

import { useCallback, useEffect, useReducer } from "react";

const birthday = new Date("2002-09-21").getTime();

const reducer = () => {
  return ((Date.now() - birthday) / (1000 * 60 * 60 * 24 * 365)).toFixed(9);
};

export const Age = () => {
  const [age, setAge] = useReducer(reducer, reducer());

  useEffect(() => {
    const id = setInterval(() => {
      setAge();
    }, 100);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <strong className="min-w-[268px] inline-block" suppressHydrationWarning>
      {age}
    </strong>
  );
};
