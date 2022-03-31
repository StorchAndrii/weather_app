import React, { useState, useRef } from "react";

import "../App.css";

export const Input = ({ setCitiesList }) => {
  const [inputValue, setinputValue] = useState("");

  const inputRef = useRef(null);

  const handleOnClick = () => {
    console.log("inputRef", inputRef);
    setCitiesList((currentArray) => [...currentArray, inputValue]);
    setinputValue("");
    inputRef.current.focus();
  };

  const handleOnChange = (event) => {
    setinputValue(event.target.value);
  };

  return (
    <div className="InputWrap">
      <input
        className="Input"
        onChange={handleOnChange}
        value={inputValue}
        ref={inputRef}
      />
      <button className="Button" onClick={handleOnClick}>
        +
      </button>
    </div>
  );
};
