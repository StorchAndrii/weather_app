import React, { useState } from "react";

import "../App.css";

const InputTag = () => {
  const [inputValue, setinputValue] = useState("empty");
  const handleOnChange = (event) => {
    setinputValue(event.target.value);
  };

  console.log("render");

  return (
    <input className="Input" onChange={handleOnChange} value={inputValue} />
  );
};

const Button = () => <button className="Button">+</button>;

export const Input = () => (
  <div className="InputWrap">
    <InputTag />
    <Button />
  </div>
);
