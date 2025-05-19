function getUserLocation(): Promise<{ latitude: number; longitude: number }> {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("Geolocation is not supported by your browser."));
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          resolve({ latitude, longitude });
        },
        (error) => {
          reject(new Error(`Error getting location: ${error.message}`));
        },
      );
    }
  });
}

export async function getDistanceFromLatLonInKm(lat1: number, lon1: number) {
  const R = 6371; // Radius of the earth in km
  const answer = await getUserLocation()
    .then((location) => {
      console.log(
        `Latitude: ${location.latitude}, Longitude: ${location.longitude}`,
      );
      const lat2 = location.latitude;
      const lon2 = location.longitude;
      const dLat = deg2rad(lat2 - lat1); // deg2rad below
      const dLon = deg2rad(lon2 - lon1);
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) *
          Math.cos(deg2rad(lat2)) *
          Math.sin(dLon / 2) *
          Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const d = R * c; // Distance in km
      console.log("distance:", d);
      return d.toFixed(4);
    })
    .catch((error) => {
      console.error(error.message);
      throw new Error(error.message);
    });
  return answer;
}

function deg2rad(deg: number) {
  return deg * (Math.PI / 180);
}
