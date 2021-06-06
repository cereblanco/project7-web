import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  label: {
    fontSize: theme.typography.pxToRem(24),
    color: "#263238",
  },
}));

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
  const classes = useStyles();
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
            classes={classes}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default Choices;
