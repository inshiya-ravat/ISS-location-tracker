import { Skeleton, Table, TableBody, TableCell, TableRow } from "@mui/material";
import Section from "./Section";
import { COLOR } from "../../Constants/StyleConstants";

export interface SolarProp {
  parameters: {
    solar_lat: string;
    solar_lon: string;
    daynum: number;
  };
  isLoading: boolean;
}
const SolarPosition = ({ parameters, isLoading }: SolarProp) => {
  return (
    <Section heading="SOLAR POSITION">
      <Table>
        <TableBody>
          <TableRow>
            <TableCell sx={{ color: COLOR.GREY }}>Solar Latitude:</TableCell>
            <TableCell>
              {isLoading ? (
                <Skeleton
                  variant="text"
                  sx={{ fontSize: "1rem", width: "100px" }}
                  animation="wave"
                />
              ) : (
                parameters.solar_lat
              )}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ color: COLOR.GREY }}>Solar Longitude:</TableCell>
            <TableCell>
              {isLoading ? (
                <Skeleton
                  variant="text"
                  sx={{ fontSize: "1rem", width: "100px" }}
                  animation="wave"
                />
              ) : (
                parameters.solar_lon
              )}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ color: COLOR.GREY }}>Day Number:</TableCell>
            <TableCell>
              {isLoading ? (
                <Skeleton
                  variant="text"
                  sx={{ fontSize: "1rem", width: "100px" }}
                  animation="wave"
                />
              ) : (
                parameters.daynum
              )}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Section>
  );
};

export default SolarPosition;
