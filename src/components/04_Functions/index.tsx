import React, { useState } from "react";

export const Functions = () => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>();
  const [isAdmin, setIsAdmin] = useState<boolean>();

  const onChange = {
    name: (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value),
    age: (e: React.ChangeEvent<HTMLSelectElement>) =>
      setAge(Number(e.target.value)),
    isAdmin: (e: React.ChangeEvent<HTMLInputElement>) =>
      setIsAdmin(e.target.checked),
  };

  return (
    <div>
      <div className="input-container">
        <label htmlFor="">名前</label>
        <input type="text" onChange={onChange["name"]} value={name} />
      </div>
      <div className="select-container">
        <label htmlFor="">年齢</label>
        <select name="" id="" onChange={onChange["age"]}>
          <option value="">24</option>
          <option value="">25</option>
        </select>
      </div>
      <div className="check-container">
        <label htmlFor="">管理者</label>
        <input
          type="checkbox"
          onChange={onChange["isAdmin"]}
          checked={isAdmin}
        />
      </div>
    </div>
  );
};
