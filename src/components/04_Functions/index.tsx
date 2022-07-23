import React, { useState } from "react";

export const Functions = () => {
  const array = [1, 2, 3, 4, 5, 6];
  // 偶数を抽出する関数
  const getEvenNumber = (numArray: readonly number[]) => {
    // 想定外に処理
    return numArray.filter((i) => i % 2 === 0);
  };
  console.log(getEvenNumber(array));
  return <p>test</p>;
};
