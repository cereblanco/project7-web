import React from "react";
import { Box, Typography } from "@material-ui/core";
import { Cancel, CheckCircle } from "@material-ui/icons";

const cheers: ReadonlyArray<string> = [
  "Awesome!",
  "Cool!",
  "Good job!",
  "Great!",
  "Nice!",
  "Keep up the good work!",
  "Sweet!",
];

type CheersProps = { positive: boolean; visible: boolean };

const Cheers: React.FC<CheersProps> = ({ positive, visible }: CheersProps) => {
  if (!visible) return null;

  const randomIndex: number = Math.floor(Math.random() * cheers.length);

  if (positive) {
    return (
      <Box alignItems="center" justifyContent="center">
        <CheckCircle style={{ fontSize: 60 }} color="primary" />
        <Box fontStyle="italic">
          <Typography variant="h6">{cheers[randomIndex]}</Typography>
        </Box>
      </Box>
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
