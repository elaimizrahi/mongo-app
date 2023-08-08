import { useState } from "react";
import "./App.css";

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
    <div>
      <form onSubmit={handleCreateClick}>
        <label htmlFor="decktitle">Deck Title</label>
        <input
          id="decktitle"
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTitle(e.target.value);
          }}
        ></input>
        <button>Create Deck</button>
      </form>
    </div>
  );
}

export default App;
