import { Table, TableBody, TableCell, TableRow } from "@mui/material";
import { COLOR } from "../../Constants/StyleConstants";
import type { ParamType } from "./CurrentPosition";

interface TabularSectionsProp {
  parameters: ParamType[];
}
const TabularSections = ({ parameters }: TabularSectionsProp) => {
  return (
    <Table>
      <TableBody>
        {parameters.map((param) => (
          <TableRow>
            <TableCell sx={{ color: COLOR.GREY }}>{param.id}</TableCell>
            <TableCell>{param.value}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TabularSections;
