import { Box, Paper, Typography } from "@material-ui/core";
import React from "react";

import StarRating from "./StarRating";

const TOTAL_STARS = 5;
const PASSING_RATE = 0.6;

const PASSED_MESSAGE = "Awesome!";
const FAILED_MESSAGE = "Sorry! You've failed!";

export type ScoreProps = {
  score: number;
  total: number;
};

const Score: React.FC<ScoreProps> = ({ score, total }: ScoreProps) => {
  const percentage = score / total;
  const message = percentage >= PASSING_RATE ? PASSED_MESSAGE : FAILED_MESSAGE;
  return (
    <Paper>
      <Box height="80vh" display="flex" justifyContent="center">
        <Box my={10} textAlign="center">
          <Typography variant="h4" color="textSecondary">
            {message}
          </Typography>
          <StarRating percentage={percentage} totalStars={TOTAL_STARS} />
          <br />
          <Typography variant="h5" color="textSecondary">
            Your final score is
          </Typography>
          <Typography style={{ fontSize: 60 }} color="textSecondary">
            {`${score} / ${total}`}{" "}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default Score;
