import React from "react";

import "../App.css";

export const Input = () => {
  const currentDate = new Date().toDateString();

  const handleOnChange = (event) => {
    console.log("event", event);
  };

  const handleOnClick = (value) => () => {
    console.log("handleOnClick ");
    console.log(value);
  };

  const handSubmit = (event) => {
    event.preventDefault();
    console.log("handSubmit ");
    console.log(handSubmit);
  };

  return (
    <div className="InputWrap">
      <form onSubmit={handSubmit}>
        <input className="Input" onChange={handleOnChange} />
        <button className="Button" onClick={handleOnClick(currentDate)}>
          +
        </button>
      </form>
    </div>
  );
};
