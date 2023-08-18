import { useState } from "react";
import "./App.css";
import SelectionTabs from "./components/SelectionTabs";

function App() {
  const [title, setTitle] = useState("");

  function handleCreateClick(event: React.FormEvent) {
    event.preventDefault();
    fetch("http://localhost:3000/decks", {
      method: "POST",
      body: JSON.stringify({ title: title }),
      headers: { "Content-Type": "application/json" },
    });
  }

  return (
    <SelectionTabs
      title={"Title"}
      tabIndex={1}
      onChange={handleCreateClick}
      style={{ justifySelf: "left" }}
    />
  );
}

export default App;
