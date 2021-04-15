import React from "react";

import { Box } from "@material-ui/core";

import { Star, StarHalf, StarOutlined } from "@material-ui/icons";

export type ResultProps = {
  percentage: number;
  totalStars: number;
};

function renderFullStars(length: number): React.ReactElement | null {
  if (length === 0) return null;
  return (
    <>
      {" "}
      {Array(length)
        .fill(null)
        .map((index) => (
          <Star
            style={{ color: "orange" }}
            fontSize="large"
            key={`full-star-${index}`}
          />
        ))}{" "}
    </>
  );
}

function renderHalfStars(length: number): React.ReactElement | null {
  if (length === 0) return null;
  return (
    <>
      {" "}
      {Array(length)
        .fill(null)
        .map((index) => (
          <StarHalf
            style={{ color: "orange" }}
            color="primary"
            key={`half-star-${index}`}
          />
        ))}{" "}
    </>
  );
}

function renderEmptyStars(length: number): React.ReactElement | null {
  if (length === 0) return null;
  return (
    <>
      {" "}
      {Array(length)
        .fill(null)
        .map((index) => (
          <StarOutlined style={{ color: "gray" }} key={`empty-star-${index}`} />
        ))}{" "}
    </>
  );
}

const StarRating: React.FC<ResultProps> = ({
  percentage,
  totalStars,
}: ResultProps) => {
  const rating = percentage * totalStars;
  const fullStarsLength = Math.floor(rating);
  const halfStarLength = rating - fullStarsLength > 0.5 ? 1 : 0;
  const emptyStarsLength = totalStars - fullStarsLength - halfStarLength;
  return (
    <Box m="auto" flex>
      {renderFullStars(fullStarsLength)}
      {renderHalfStars(halfStarLength)}
      {renderEmptyStars(emptyStarsLength)}
    </Box>
  );
};

export default StarRating;
