import { FC } from "react";

const DataComponent: FC<{
  className?: string;
  value: string | number;
  units?: string;
  textValue: string;
}> = ({ className, value, units, textValue }) => {
  return (
    <div className={className}>
      <img src="" alt="" />
      <div>
        <h2>{`${value}${units}`}</h2>
        <h3>{textValue}</h3>
      </div>
    </div>
  );
};

export default DataComponent;
