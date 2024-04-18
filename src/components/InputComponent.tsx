import { Dispatch, FC, SetStateAction } from "react";
import styled from "@emotion/styled";

const Input = styled.input`
  margin-left: 1rem;
  border-color: #189af8;
  padding: 0.3rem;
  border-radius: 9999em;

  &:focus {
    outline: none !important;
    border-color: #719ece;
    box-shadow: 0 0 8px #719ece;
  }
`;
const Button = styled.button`
  margin-right: 1rem;
  border-radius: 1rem;
  margin-left: 1rem;
  padding: 0.4rem;
  font-size: 1.1rem;
  border: 0;
  background-color: #189bf889;
  transition: 0.3s;
  height: fit-content;

  &:active {
    background-color: #3cd2fbca;
    box-shadow: 0 0 10px #719ece;
  }
`;

interface Props {
  cityName: string;
  setCityName: Dispatch<SetStateAction<string>>;
  submitHandler: () => void;
}

const InputComponent: FC<Props> = ({
  submitHandler,
  cityName,
  setCityName,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      submitHandler();
    } else return;
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        maxWidth: "-webkit-fill-available",
      }}
    >
      <Input
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
        type="text"
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <Button onClick={() => submitHandler()}>Check</Button>
    </div>
  );
};

export default InputComponent;
