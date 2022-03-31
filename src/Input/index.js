import React, { useState } from "react";

import "../App.css";

export const Input = ({ setiCitiesList }) => {
  const [inputValue, setinputValue] = useState("empty");

  const handleOnClick = () => {
    setiCitiesList((currentArray) => [...currentArray, inputValue]);
  };

  const handleOnChange = (event) => {
    setinputValue(event.target.value);
  };

  return (
    <div className="InputWrap">
      <input className="Input" onChange={handleOnChange} value={inputValue} />
      <button className="Button" onClick={handleOnClick}>
        +
      </button>
      ;
    </div>
  );
};
