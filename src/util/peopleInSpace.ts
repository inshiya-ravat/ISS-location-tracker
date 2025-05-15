type PersonInfo = {
  craft: string;
  name: string;
};
export async function peopleInSpace() {
  const response = await fetch("http://api.open-notify.org/astros.json");
  if (response.ok) {
    const data = await response.json();
    let peopleInISS = 0;
    data.people.map((person: PersonInfo) => {
      if (person.craft === "ISS") {
        peopleInISS++;
      }
    });
    return peopleInISS;
  } else {
    throw new Error("Failed to fetch. Please try again later.");
  }
}
