import { OutlinedInput } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  input: {
    border: "1px solid #ddd",
    fontSize: "1rem",
    height: "0.8rem",
    lineHeight: "2.5rem",
    padding: "1rem 0.75rem",
    width: "1.5rem",
  },
}));

export type BlankProps = {
  id: string;
  key: string;
  value: string;
  disabled: boolean;
  onChange: (id: string, value: string) => void;
};

const Blank: React.FC<BlankProps> = ({
  id,
  value: initialValue,
  disabled,
  onChange,
}: BlankProps) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(initialValue);
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setValue(inputValue);
    onChange(id, inputValue.toString());
  };

  return (
    <OutlinedInput
      id={id}
      type="text"
      disabled={disabled}
      value={value}
      onChange={handleOnChange}
      classes={classes}
      inputProps={{ maxLength: 2 }}
    />
  );
};

export default Blank;
