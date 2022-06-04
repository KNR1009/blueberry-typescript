import React from "react";

type Family<Parent, Child> = {
  mother: Parent;
  father: Parent;
  child: Child;
};
export const TypeTest = () => {
  const family: Family<String, Number> = {
    mother: "aaa",
    father: "bbb",
    child: 0,
  };
  return <div>TypeTest</div>;
};
