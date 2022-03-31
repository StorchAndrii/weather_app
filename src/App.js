import "./App.css";
import { Card } from "./Card";
import { Input } from "./Input";

function App() {
  const citiesList = ["New York", "Киев", "London"];
  return (
    <div className="Main">
      <Input />
      <div className="CardList">
        {citiesList.map((city) => (
          <Card key={city} city={city} />
        ))}
      </div>
    </div>
  );
}

export default App;
