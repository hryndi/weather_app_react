import styled from "@emotion/styled";
import { WeaklyWether } from "../WeatherApp.hooks";
import { CSSProperties, FC } from "react";

const Table = styled.table`
  border: 1px solid black;
`;
const Tr = styled.tr`
  border: 1px solid blue;
`;
const Td = styled("td")(() => ({
  "&.text-align-left": {
    textAlign: "left" as CSSProperties["textAlign"],
  },
  "&.text-align-center": {
    textAlign: "center" as CSSProperties["textAlign"],
  },
  "&.text-align-right": {
    textAlign: "right" as CSSProperties["textAlign"],
  },
}));

type Props = {
  weaklyWether: WeaklyWether;
};

const sevenData = Array.from("1234567", (idx) => idx);

const TableComponent: FC<Props> = ({ weaklyWether }) => {
  return (
    <Table>
      {sevenData.map((i, idx) => (
        <Tr>
          <Td>{weaklyWether.time[idx]}</Td>
          <Td>{weaklyWether.weather_code[idx]}</Td>
          <Td className="text-align-right">
            {weaklyWether.temperature_2m_min[idx]} -{" "}
            {weaklyWether.temperature_2m_max[idx]}
          </Td>
        </Tr>
      ))}
    </Table>
  );
};

export default TableComponent;
