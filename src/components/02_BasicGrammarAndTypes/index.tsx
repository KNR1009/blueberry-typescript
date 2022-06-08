import React from "react";

export const Basic = () => {
  /* 文は1つの処理のまとまり */
  // const greeting = "Hello";
  // const Target = "world";
  // console.log(greeting + Target);

  const x = NaN;
  if (Number.isNaN(x)) {
    console.log("値が存在します");
  } else {
    console.log("値は存在しません");
  }
  return <div>index</div>;
};
