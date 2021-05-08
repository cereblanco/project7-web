import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

export type ChoicesProps = {
  choices: ReadonlyArray<string>;
  onChange: (value: string) => void;
  disabled?: boolean;
};

const Choices: React.FC<ChoicesProps> = ({
  choices,
  onChange,
  disabled,
}: ChoicesProps) => {
  const [value, setValue] = React.useState("");

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = event.target.value;
    setValue(selectedValue);
    onChange(selectedValue);
  };

  return (
    <FormControl component="fieldset">
      <RadioGroup
        aria-label="choices"
        name="choices"
        value={value}
        onChange={handleOnChange}
      >
        {choices.map((value: string, index: number) => (
          <FormControlLabel
            id={`choice-${index}`}
            key={`choice-${index}`}
            disabled={disabled}
            value={value}
            control={<Radio />}
            color="primary"
            label={value}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default Choices;
