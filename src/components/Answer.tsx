import React from "react";

import { Box, Typography } from "@material-ui/core";

export type AnswerProps = {
  answer: string;
  visible: boolean;
};

const Answer: React.FC<AnswerProps> = ({ answer, visible }: AnswerProps) => {
  if (!visible) return null;
  return (
    <Box>
      <Typography variant="subtitle1">ANSWER</Typography>
      <Typography variant="h6" >{answer}</Typography>
    </Box>
  );
};

export default Answer;
