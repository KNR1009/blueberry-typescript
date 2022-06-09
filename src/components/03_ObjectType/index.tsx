import { copyFile } from "fs";
import React from "react";

export const ObjectType = () => {
  const user = {
    name: "田中",
    address: {
      number: 1730014,
      house: "スカイシャルム大山",
    },
  };

  const {
    name,
    address: { number },
  } = user;

  console.log(number);

  return <div>index</div>;
};
