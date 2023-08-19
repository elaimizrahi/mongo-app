import { useState } from "react";
import "./App.css";
import BasicTabs from "./components/SelectionTabs";
import Topbar from "./components/Topbar";
import Stack from "@mui/material/Stack";
import ProfileDropdown from "./components/ProfileDropdown";
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
        <Stack direction="row" style={{ justifyContent: "space-between" }}>
          <BasicTabs />
          <ProfileDropdown />
        </Stack>
      </Topbar>
    </div>
  );
}

export default App;
