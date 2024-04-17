import { Dispatch, FC, SetStateAction } from "react";
import styled from "@emotion/styled";

const Input = styled.input`
  border-color: red;
  padding: 1px;
  border-radius: 9999em;
`;
const Button = styled.button`
  border-color: #cd1313;
  border-radius: 0.5rem;
  margin-left: 1rem;
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
    <div>
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
