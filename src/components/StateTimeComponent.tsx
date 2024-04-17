import styled from "@emotion/styled";
import { FC } from "react";

const StateTimeInfo = styled.div``;
const StateHeader = styled.h2``;
const TimeParagrapf = styled.p``;

const StateTimeComponent: FC<{ time: string; cityName: string }> = ({
  time,
  cityName,
}) => {
  const date = new Date(time).toDateString();
  return (
    <StateTimeInfo>
      <StateHeader>{cityName}</StateHeader>
      <TimeParagrapf>{date}</TimeParagrapf>
    </StateTimeInfo>
  );
};

export default StateTimeComponent;
