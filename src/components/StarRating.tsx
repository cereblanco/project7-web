import React from "react";

import { Box } from "@material-ui/core";

import { Star, StarHalf, StarOutlined } from "@material-ui/icons";


export type ResultProps = {
    percentage: number;
    totalStars: number;
};


function renderFullStars(length: number ): React.ReactElement | null{
    if (length === 0) return null;    
    return <> { Array(length).fill(null).map(() =>  <Star style={{color: "orange"}} fontSize="large" />)} </>
}


function renderHalfStars(length: number): React.ReactElement | null{
    if (length === 0) return null;
    return <> { Array(length).fill(null).map(() => <StarHalf style={{color: "orange"}} color="primary" /> )} </>
}


function renderEmptyStars(length: number): React.ReactElement | null{
    if (length === 0) return null;
    return <> { Array(length).fill(null).map(() => <StarOutlined style={{color: "gray"}}/> )} </>
}


const StarRating: React.FC<ResultProps> = ({ percentage, totalStars }: ResultProps) => {
    const rating = percentage * totalStars;
    const fullStarsLength =  Math.floor(rating);
    const halfStarLength = ((rating - fullStarsLength) > 0.5) ? 1: 0;
    const emptyStarsLength = totalStars - fullStarsLength - halfStarLength;
    return (
        <Box m="auto" flex >
            {renderFullStars(fullStarsLength)}
            {renderHalfStars(halfStarLength)}
            {renderEmptyStars(emptyStarsLength)}
        </Box>
    )

};

export default StarRating;
