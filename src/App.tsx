import { Stack } from "@mui/material";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import UpdateInterval from "./components/UpdateInterval/UpdateInterval";
import Dashboard from "./components/Dashboard/Dashboard";
import { useCallback, useState } from "react";
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
    daynum: number;
  };
};

const initialAllParam: Param = {
  id: "",
  currentPosition: {
    latitude: "",
    longitude: "",
    altitude: "",
    visibility: "",
  },
  distance: {
    footprints: "",
  },
  velocity: {
    velocity: "",
    units: "",
  },
  solar: {
    solar_lat: "",
    solar_lon: "",
    daynum: 0,
  },
};

function App() {
  const [lastUpdated, setLastUpdated] = useState<number>(Date.now());
  const [param, setParam] = useState(initialAllParam);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const memoizedRefreshPage = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await getISSInfo();
      setIsLoading(false);
      if (data) {
        setParam(data);
      }
      updateLastUpdated();
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }
  }, []);

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
        <Dashboard
          refreshPage={memoizedRefreshPage}
          isLoading={isLoading}
          error={error}
          param={param}
        />
      </Stack>
    </>
  );
}

export default App;
