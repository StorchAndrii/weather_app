import React, { useState } from "react";

import "./App.css";
import { Card } from "./Card";
import { Input } from "./Input";

function App() {
  const [citiesList, setiCitiesList] = useState([]);

  return (
    <div className="Main">
      <Input setiCitiesList={setiCitiesList} />
      <div className="CardList">
        {citiesList.map((city) => (
          <Card key={city} city={city} />
        ))}
      </div>
    </div>
  );
}

export default App;
