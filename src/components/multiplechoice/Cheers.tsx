import React from "react";
import { Box, Typography } from "@material-ui/core";
import { Cancel, CheckCircle } from "@material-ui/icons";

const cheers: ReadonlyArray<string> = [
  "Awesome!",
  "Good job!",
  "Great!",
  "Correct!",
  "Keep up the good work!",
  "You got it right!",
];

type CheersProps = { positive: boolean; visible: boolean };

const Cheers: React.FC<CheersProps> = ({ positive, visible }: CheersProps) => {
  if (!visible) return null;

  const randomIndex: number = Math.floor(Math.random() * cheers.length);

  if (positive) {
    return (
      <>
        <CheckCircle width="100%" style={{ fontSize: 70 }} color="primary" />
        <Typography variant="h5">{cheers[randomIndex]}</Typography>
      </>
    );
  }

  return (
    <>
      <Box>
        <Cancel style={{ fontSize: 70 }} color="error" />
      </Box>
    </>
  );
};

export default Cheers;
