import { Table, TableBody, TableCell, TableRow } from "@mui/material";
import Section from "./Section";
import { COLOR } from "../../Constants/StyleConstants";

export interface SolarProp {
  parameters: {
    solar_lat: string;
    solar_lon: string;
    daynum: string;
  };
}
const SolarPosition = ({ parameters }: SolarProp) => {
  return (
    <Section heading="SOLAR POSITION">
      <Table>
        <TableBody>
          <TableRow>
            <TableCell sx={{ color: COLOR.GREY }}>Solar Latitude:</TableCell>
            <TableCell>{parameters.solar_lat}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ color: COLOR.GREY }}>Solar Longitude:</TableCell>
            <TableCell>{parameters.solar_lon}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ color: COLOR.GREY }}>Day Number:</TableCell>
            <TableCell>{parameters.daynum}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Section>
  );
};

export default SolarPosition;
