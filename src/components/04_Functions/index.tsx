import React, { useState } from "react";

export const Functions = () => {
  const [value1, setValue1] = useState<string>("");
  const [value2, setValue2] = useState<string>("");
  const [value3, setValue3] = useState<string>("");

  const onChangeObj = {
    value1: (e: React.ChangeEvent<HTMLInputElement>) =>
      setValue1(e.target.value),
    value2: (e: React.ChangeEvent<HTMLInputElement>) =>
      setValue2(e.target.value),
    value3: (e: React.ChangeEvent<HTMLInputElement>) =>
      setValue3(e.target.value),
  };

  return (
    <div>
      <div className="input-container">
        <label htmlFor="">入力フォーム1</label>
        <input
          type="text"
          value={value1}
          onChange={(e) => {
            onChangeObj.value1(e);
          }}
        />
        <label htmlFor="">入力フォーム2</label>
        <input
          type="text"
          value={value2}
          onChange={(e) => onChangeObj.value2(e)}
        />
        <label htmlFor="">入力フォーム3</label>
        <input
          type="text"
          onChange={(e) => onChangeObj.value3(e)}
          value={value3}
        />
      </div>
    </div>
  );
};
