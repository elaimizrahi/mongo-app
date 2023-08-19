import { useState } from "react";
import "./App.css";
import BasicTabs from "./components/SelectionTabs";
import { Topbar } from "./components/Topbar";
import Input from "@mui/material/Input";
import Stack from "@mui/material/Stack";
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
      <Topbar>
        {" "}
        <Stack direction="row">
          <BasicTabs />
          <Input />{" "}
        </Stack>
      </Topbar>
    </div>
  );
}

export default App;
