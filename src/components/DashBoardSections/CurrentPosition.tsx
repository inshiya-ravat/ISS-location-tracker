import { Table, TableBody, TableCell, TableRow } from "@mui/material";
import Section from "./Section";
import { COLOR } from "../../Constants/StyleConstants";

export interface CurrentPositionProp {
  parameters: {
    latitude: string;
    longitude: string;
    altitude: string;
    visibility: string;
  };
}
const CurrentPosition = ({ parameters }: CurrentPositionProp) => {
  return (
    <Section heading="CURRENT POSITION">
      <Table>
        <TableBody>
          <TableRow>
            <TableCell sx={{ color: COLOR.GREY }}>Latitude:</TableCell>
            <TableCell>{parameters.latitude}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ color: COLOR.GREY }}>Longitude:</TableCell>
            <TableCell>{parameters.longitude}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ color: COLOR.GREY }}>Altitude:</TableCell>
            <TableCell>{parameters.altitude}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ color: COLOR.GREY }}>Visibility:</TableCell>
            <TableCell>{parameters.visibility}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Section>
  );
};

export default CurrentPosition;
