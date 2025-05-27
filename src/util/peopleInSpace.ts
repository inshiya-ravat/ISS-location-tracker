type PersonInfo = {
  craft: string;
  name: string;
};
export async function peopleInSpace() {
  try {
    const PeopleInSpaceAPI = import.meta.env.VITE_API_PEOPLE_IN_SPACE;
    const response = await fetch(`${PeopleInSpaceAPI}/astros.json`);
    if (response.ok) {
      const data = await response.json();
      const peopleInISS = data.people.filter(
        (person: PersonInfo) => person.craft === "ISS",
      );
      return peopleInISS.length;
    } else {
      throw new Error(
        "Failed to fetch people in space. Please try again later.",
      );
    }
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(
        "Failed to fetch people in space. Please try again later.",
      );
    }
  }
}
