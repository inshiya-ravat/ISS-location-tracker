export async function getISSInfo() {
  try {
    const ISSInfoAPI = import.meta.env.VITE_API_ISS_INFO;
    const response = await fetch(`${ISSInfoAPI}/satellites/25544`);
    if (response.ok) {
      const data = await response.json();
      const allParamSeperated = {
        id: data.id,
        currentPosition: {
          latitude: data.latitude.toFixed(4),
          longitude: data.longitude.toFixed(4),
          altitude: data.altitude.toFixed(4),
          visibility: data.visibility,
        },
        distance: {
          footprints: data.footprint.toFixed(4),
        },
        velocity: {
          velocity: data.velocity.toFixed(4),
          units: data.units,
        },
        solar: {
          solar_lat: data.solar_lat.toFixed(4),
          solar_lon: data.solar_lon.toFixed(4),
          daynum: Math.floor(Number(data.daynum)),
        },
      };
      return allParamSeperated;
    } else {
      throw new Error("Failed to fetch ISS data. Please try again later.");
    }
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("Failed to fetch ISS data. Please try again later.");
    }
  }
}
