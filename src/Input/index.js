import React, { useState, useRef, useMemo } from "react";

export const Input = ({ setCitiesList }) => {
  const [inputValue, setInputValue] = useState("");
  const [someValue, setSomeValue] = useState(0);

  const inputRef = useRef(null);

  const handleOnClick = () => {
    // console.log("inputRef", inputRef);
    setCitiesList((currentArray) => [...currentArray, inputValue]);
    setInputValue("");
    inputRef.current.focus();
  };

  const handleOnChange = (event) => {
    // console.log(event);
    setInputValue(event.target.value);
  };

  const onSomeClick = (event) => {
    setSomeValue((someValue) => someValue + 1);
  };

  const oldInputValue = useMemo(
    () => `${inputValue}_${Math.random()}`,
    [inputValue]
  );

  // console.log("someValue", someValue);
  // console.log("oldInputValue", oldInputValue);
  // console.log("from render", `${inputValue}_${Math.random()}`);
  // console.log("inputValue", inputValue);

  return (
    <div className="InputWrap">
      <input
        className="Input"
        onClick={onSomeClick}
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
