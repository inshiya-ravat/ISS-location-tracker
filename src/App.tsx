import { Stack } from "@mui/material";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import UpdateInterval from "./components/UpdateInterval/UpdateInterval";
import Dashboard from "./components/Dashboard/Dashboard";
import { useState } from "react";
import { getISSInfo } from "./util/getISSInfo";

export type Param = {
  id: string;
  currentPosition: {
    latitude: string;
    longitude: string;
    altitude: string;
    visibility: string;
  };
  distance: {
    footprints: string;
  };
  velocity: {
    velocity: string;
    units: string;
  };
  solar: {
    solar_lat: string;
    solar_lon: string;
    daynum: string;
  };
};

const initialAllParam: Param = {
  id: "loading...",
  currentPosition: {
    latitude: "loading...",
    longitude: "loading...",
    altitude: "loading...",
    visibility: "loading...",
  },
  distance: {
    footprints: "loading...",
  },
  velocity: {
    velocity: "loading...",
    units: "loading...",
  },
  solar: {
    solar_lat: "loading...",
    solar_lon: "loading...",
    daynum: "loading...",
  },
};

function App() {
  const [lastUpdated, setLastUpdated] = useState<number>(Date.now());
  const [param, setParam] = useState(initialAllParam);
  const [error, setError] = useState<string | null>(null);

  async function refreshPage() {
    try {
      const data = await getISSInfo();
      setParam(data);
      updateLastUpdated();
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }
  }

  function updateLastUpdated() {
    setLastUpdated(Date.now());
  }

  function updateParam(newParam: Param) {
    setParam(newParam);
  }

  return (
    <>
      <Navbar />
      <Stack>
        <UpdateInterval
          updateLastUpdated={updateLastUpdated}
          lastUpdate={lastUpdated}
          updateParam={updateParam}
        />
        <Dashboard refreshPage={refreshPage} error={error} param={param} />
      </Stack>
    </>
  );
}

export default App;
