import React from "react";

export const TypeTest = () => {
  type HasName = {
    name: string;
  };
  type Family<Parent extends HasName, Child extends HasName> = {
    mother: Parent;
    child: Child;
  };

  type Parent = {
    name: string;
    age: number;
  };

  type Child = {
    name: string;
    sex: string;
  };

  const obj: Family<Parent, Child> = {
    mother: {
      name: "aaa",
      age: 13,
    },
    child: {
      name: "鈴木",
      sex: "bb",
    },
  };

  return <div>TypeTest</div>;
};
