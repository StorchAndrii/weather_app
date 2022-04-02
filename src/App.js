import React from "react";

import "./App.css";
import { CardList } from "./CardList";
import { Input } from "./Input";
import { useCitiesList } from "./hooks/useCitiesList";

function App() {
  const [citiesList, setCitiesList] = useCitiesList();

  return (
    <div className="Main">
      <Input setCitiesList={setCitiesList} />
      <CardList citiesList={citiesList} />
    </div>
  );
}

export default App;
