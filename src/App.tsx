import { Stack } from "@mui/material";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import UpdateInterval from "./components/UpdateInterval/UpdateInterval";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <>
      <Navbar />
      <Stack>
        <UpdateInterval />
        <Dashboard />
      </Stack>
    </>
  );
}

export default App;
