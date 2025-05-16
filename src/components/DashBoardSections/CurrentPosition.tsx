import { Skeleton, Table, TableBody, TableCell, TableRow } from "@mui/material";
import Section from "./Section";
import { COLOR } from "../../Constants/StyleConstants";

export interface CurrentPositionProp {
  parameters: {
    latitude: string;
    longitude: string;
    altitude: string;
    visibility: string;
  };
  isLoading: boolean;
}
const CurrentPosition = ({ parameters, isLoading }: CurrentPositionProp) => {
  return (
    <Section heading="CURRENT POSITION">
      <Table>
        <TableBody>
          <TableRow>
            <TableCell sx={{ color: COLOR.GREY }}>Latitude:</TableCell>
            <TableCell>
              {isLoading ? (
                <Skeleton
                  variant="text"
                  sx={{ fontSize: "1rem", width: "50px" }}
                  animation="wave"
                />
              ) : (
                parameters.latitude
              )}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ color: COLOR.GREY }}>Longitude:</TableCell>
            <TableCell>
              {isLoading ? (
                <Skeleton
                  variant="text"
                  sx={{ fontSize: "1rem", width: "50px" }}
                  animation="wave"
                />
              ) : (
                parameters.longitude
              )}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ color: COLOR.GREY }}>Altitude:</TableCell>
            <TableCell>
              {isLoading ? (
                <Skeleton
                  variant="text"
                  sx={{ fontSize: "1rem", width: "50px" }}
                  animation="wave"
                />
              ) : (
                parameters.altitude
              )}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ color: COLOR.GREY }}>Visibility:</TableCell>
            <TableCell>
              {isLoading ? (
                <Skeleton
                  variant="text"
                  sx={{ fontSize: "1rem", width: "50px" }}
                  animation="wave"
                />
              ) : (
                parameters.visibility
              )}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Section>
  );
};

export default CurrentPosition;
