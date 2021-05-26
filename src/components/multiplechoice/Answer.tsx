import React from "react";

import { Box, Typography } from "@material-ui/core";

export type AnswerProps = {
  text: string;
  visible: boolean;
};

const Answer: React.FC<AnswerProps> = ({ text, visible }: AnswerProps) => {
  if (!visible) return null;
  return (
    <Box>
      <Typography variant="subtitle1">ANSWER</Typography>
      <Typography variant="h4">{text}</Typography>
    </Box>
  );
};

export default Answer;
