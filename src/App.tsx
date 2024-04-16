import styled from "@emotion/styled";

const StateTimeInfo = styled.div``;
const StateHeader = styled.h2``;
const TimeParagrapf = styled.p``;
const MainFlexGroup = styled.div``;
const WeatherImg = styled.img``;
const TemperatureSpan = styled.span``;
const WeatherConditionH2 = styled.h2``;
const WindValueWrapper = styled.div``;
const WindH4 = styled.h4``;
const WindValueP = styled.p``;
const Table = styled.table``;
const Tr = styled.tr``;
const Td = styled.td``;

function App() {
  return (
    <main>
      <StateTimeInfo>
        <StateHeader>Kyiv, Zaporizhzhya</StateHeader>
        <TimeParagrapf>now</TimeParagrapf>
      </StateTimeInfo>
      <MainFlexGroup>
        <WeatherImg src="" alt="weather-icon" />
        <TemperatureSpan>32*</TemperatureSpan>
        <WeatherConditionH2 className="weather-condition">Most cloudy</WeatherConditionH2>
        <WindValueWrapper className="wind-value-wrapper">
          <WindH4>Wind</WindH4>
          <WindValueP className="wind-value">4km/h</WindValueP>
        </WindValueWrapper>
      </MainFlexGroup>

      <Table>
        <Tr>
          <Td></Td>
          <Td></Td>
          <Td></Td>
        </Tr>
      </Table>
    </main>
  );
}

export default App;
