import React, { useState } from "react";

export const Functions = () => {
  type Single = "plus" | "minus";
  const get = (param: "plus" | "minus") => {
    return param === "plus" ? 1 : -1;
  };

  const test = (type: Single | "none") => {
    if (type === "none") {
      console.log("データなし");
    } else {
      get(type);
    }
  };
  return <div></div>;
};
