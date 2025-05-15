import { Table, TableBody, TableCell, TableRow } from "@mui/material";
import Section from "./Section";
import { COLOR } from "../../Constants/StyleConstants";
import { useEffect, useState } from "react";
import { peopleInSpace } from "../../util/peopleInSpace";
import ErrorMessage from "../Error/ErrorMEssage";
function getCreatedAt() {
  const now = new Date();
  const currentTime = now.toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "medium",
    hour12: true,
  });
  return currentTime;
}

const Timestamp = () => {
  const [error, setError] = useState<string | null>(null);
  const [peopleInISS, setPeopleInISS] = useState<number | string>("Loading...");
  useEffect(() => {
    async function seperatePramas() {
      try {
        const data = await peopleInSpace();
        setPeopleInISS(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      }
    }
    seperatePramas();
  }, []);

  if (error) {
    return <ErrorMessage error={error} />;
  }
  return (
    <Section heading="TIMESTAMP INFORMATION">
      <Table>
        <TableBody>
          <TableRow>
            <TableCell sx={{ color: COLOR.GREY }}>Unix Timestamp :</TableCell>
            <TableCell>{Date.now()}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ color: COLOR.GREY }}>Solar Longitude:</TableCell>
            <TableCell>{getCreatedAt()}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ color: COLOR.GREY }}>Day Number:</TableCell>
            <TableCell>{peopleInISS}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Section>
  );
};

export default Timestamp;
