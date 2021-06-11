import { Box, Typography } from "@material-ui/core";
import { Cancel, CheckCircle } from "@material-ui/icons";
import React from "react";

const cheers: ReadonlyArray<string> = [
  "Awesome!",
  "Good job!",
  "Great!",
  "Correct!",
  "You got it right!",
];

export type AnswerProps = { isCorrect: boolean; text: string; visible: boolean };

const Answer: React.FC<AnswerProps> = ({
  isCorrect,
  text,
  visible,
}: AnswerProps) => {
  if (!visible) {
    return null;
  }

  if (isCorrect) {
    const randomIndex: number = Math.floor(Math.random() * cheers.length);
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
      <Box>
        <Typography variant="subtitle1">ANSWER</Typography>
        <Typography variant="h4">{text}</Typography>
      </Box>
    </>
  );
};

export default Answer;
