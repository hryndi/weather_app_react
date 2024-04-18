import styled from "@emotion/styled";
import { FC } from "react";

const StateTimeInfo = styled.div`
  text-align: center;
`;
const StateHeader = styled.h2``;
const TimeParagrapf = styled.p`
  font-size: 0.8rem;
  font-weight: 500;
`;

const StateTimeComponent: FC<{
  time: string;
  cityName: string;
  dateHandler: (time: string) => string;
}> = ({ time, cityName, dateHandler }) => {
  //   const date = new Date(time).toDateString();
  return (
    <StateTimeInfo>
      <StateHeader>{cityName}</StateHeader>
      <TimeParagrapf>{dateHandler(time)}</TimeParagrapf>
    </StateTimeInfo>
  );
};

export default StateTimeComponent;
