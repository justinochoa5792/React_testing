import "./App.css";
import Button from "./components/Button";
import InputField from "./InputField";
import { useState } from "react";

function App() {
  const [showDiv, setShowDiv] = useState(true);
  return (
    <div className="App">
      <InputField showDiv={showDiv} />
      <Button />
    </div>
  );
}

export default App;
