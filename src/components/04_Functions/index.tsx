import React from "react";

export const Functions = () => {
  // nameプロパティーを持つ型
  type HasName = {
    name: string;
  };
  // nameとageプロパティーを持つ(HasNameの部分型)
  type HasNameAndAge = {
    name: string;
    age: number;
  };
  // nameとageが返ってくる関数
  const formAge = (age: number): HasNameAndAge => {
    return {
      name: "鈴木",
      age,
    };
  };
  // nameだけが返ってくる関数
  const f: (age: number) => HasName = formAge;
  const obj: HasName = f(100);

  console.log(obj);

  return <div>index</div>;
};
