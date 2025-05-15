import { Stack } from "@mui/material";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import UpdateInterval from "./components/UpdateInterval/UpdateInterval";
import Dashboard from "./components/Dashboard/Dashboard";
import { useState } from "react";

function App() {
  const [lastUpdated, setLastUpdated] = useState<number>(Date.now());
  function updateLastUpdated() {
    setLastUpdated(Date.now());
  }
  return (
    <>
      <Navbar />
      <Stack>
        <UpdateInterval lastUpdate={lastUpdated} />
        <Dashboard updateLastUpdated={updateLastUpdated} />
      </Stack>
    </>
  );
}

export default App;
