import { Stack } from "@mui/material";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import UpdateInterval from "./components/UpdateInterval/UpdateInterval";

function App() {
  return (
    <>
      <Navbar />
      <Stack>
        <UpdateInterval />
      </Stack>
    </>
  );
}

export default App;
