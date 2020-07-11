import React from "react";

import {  Box, Paper, Typography } from "@material-ui/core";
import StarRating from "./StarRating";

const TOTAL_STARS = 5;
const PASSING_RATE = 0.6;

const PASSED_MESSAGE: string = "Awesome!";
const FAILED_MESSAGE: string = "Sorry! You've failed!"

export type ResultProps = {
    score: number;
    total: number;
};

const Result: React.FC<ResultProps> = ({ score, total }: ResultProps) => {
    const percentage = score / total;
    const message = (percentage >= PASSING_RATE) ? PASSED_MESSAGE: FAILED_MESSAGE;
    return (
        <Paper>
            <Box height="80vh" display="flex" justifyContent="center">
                <Box my={10} textAlign="center" >
                    <Box fontStyle="italic">
                        <Typography variant="h6" color="textSecondary">{message}</Typography>
                    </Box>
                    <Box>
                        <StarRating percentage={percentage} totalStars={TOTAL_STARS} />
                    </Box>
                    <Typography variant="h6" color="textSecondary">Your final score is</Typography>
                    <Typography variant="h4" color="textPrimary">{`${score} / ${total}`} </Typography>
                </Box>
            </Box>
        </Paper>
    );
};

export default Result;
