import React from "react";

export type ChoiceProps = {
  key: string;
  value: string;
  isChecked: boolean;
  disabled: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Choice: React.FC<ChoiceProps> = ({
  value,
  isChecked,
  disabled,
  onChange,
}: ChoiceProps) => {
  return (
    <li>
      <input
        id={value}
        type="radio"
        name="choices"
        checked={isChecked}
        value={value}
        disabled={disabled}
        onChange={onChange}
      />
      <label htmlFor={value}>{value}</label>
    </li>
  );
};

export default Choice;
