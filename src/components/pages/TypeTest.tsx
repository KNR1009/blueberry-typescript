import React from "react";

export const TypeTest = () => {
  const obj = {
    double(num: number): number {
      return num * 2;
    },
    double3(num: number): number {
      return num * 3;
    },
  };

  console.log(obj.double(1));
  console.log(obj.double3(1));
  return <div>TypeTest</div>;
};
