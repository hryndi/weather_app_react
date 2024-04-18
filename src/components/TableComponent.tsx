import styled from "@emotion/styled";
import { WeaklyWether } from "../WeatherApp.hooks";
import { FC } from "react";

const Table = styled.table`
  width: 100%;
  border-spacing: 10px;
  width: 100%;
`;
const Tr = styled.tr``;
const Td = styled.td`
  &.text-align-left {
    text-align: left;
  }
  &.text-align-center {
    text-align: center;
  }
  &.text-align-right {
    text-align: right;
  }
  /* padding-inline: 1rem; */
  text-align: center;
  font-weight: 500;
  &:last-child {
    text-align: left;
  }
`;
const TableImg = styled.img`
  width: 40px;
`;

type Props = {
  weaklyWether: WeaklyWether;
  dateHandler: (time: string) => string;
  conditionHandler: (condition: number, conditionImg: boolean) => string;
};

const sevenData = Array.from("12345", (idx) => idx);

const TableComponent: FC<Props> = ({
  weaklyWether,
  dateHandler,
  conditionHandler,
}) => {
  return (
    <Table>
      <tbody>
        {sevenData.map((i, idx) => (
          <Tr key={i}>
            <Td>{dateHandler(weaklyWether.time[idx])}</Td>
            <Td>
              <TableImg
                src={conditionHandler(weaklyWether.weather_code[idx], true)}
                alt=""
              />
            </Td>
            <Td className="text-align-justify">
              {`${parseInt(`${weaklyWether.temperature_2m_min[idx]}`, 10)}° - `}
              {`${weaklyWether.temperature_2m_max[idx]}°`}
            </Td>
          </Tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableComponent;
