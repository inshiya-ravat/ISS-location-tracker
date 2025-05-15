export async function getISSInfo() {
  const response = await fetch(
    "https://api.wheretheiss.at/v1/satellites/25544",
  );
  if (response.ok) {
    const data = await response.json();
    const allParamSeperated = {
      id: data.id,
      currentPosition: {
        latitude: data.latitude,
        longitude: data.longitude,
        altitude: data.altitude,
        visibility: data.visibility,
      },
      distance: {
        footprints: data.footprint,
      },
      velocity: {
        velocity: data.velocity,
        units: data.units,
      },
      solar: {
        solar_lat: data.solar_lat,
        solar_lon: data.solar_lon,
        daynum: data.daynum,
      },
    };
    return allParamSeperated;
  } else {
    throw new Error("Failed to fetch. Please try again later.");
  }
}
