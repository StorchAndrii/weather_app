import React from "react";
import { Card } from "../Card/index.js";

export const CardList = ({ citiesList, dispatch }) => {
  return (
    <div className="CardList">
      {citiesList.map((city) => (
        <Card key={city} city={city} dispatch={dispatch} />
      ))}
    </div>
  );
};
