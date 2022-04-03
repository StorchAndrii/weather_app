import React from "react";
import { Card } from "../Card/index.js";

export const CardList = ({ citiesList }) => {
  return (
    <div className="CardList">
      {citiesList.map((city) => (
        <Card key={city} city={city} />
      ))}
    </div>
  );
};
