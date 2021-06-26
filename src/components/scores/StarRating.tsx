import { Box } from "@material-ui/core";
import { Star, StarHalf, StarOutlined } from "@material-ui/icons";
import React from "react";

export type StarRatingProps = {
  percentage: number;
  totalStars: number;
};

function renderFullStars(length: number): React.ReactElement | null {
  if (length === 0) {
    return null;
  }
  return (
    <>
      {" "}
      {Array(length)
        .fill(null)
        .map((_, index) => (
          <Star
            aria-label="full-star"
            style={{ color: "orange", fontSize: 50 }}
            key={`full-star-${index}`}
          />
        ))}{" "}
    </>
  );
}

function renderHalfStars(length: number): React.ReactElement | null {
  if (length === 0) {
    return null;
  }
  return (
    <>
      {" "}
      {Array(length)
        .fill(null)
        .map((_, index) => (
          <StarHalf
            aria-label="half-star"
            style={{ color: "orange", fontSize: 50 }}
            color="primary"
            key={`half-star-${index}`}
          />
        ))}{" "}
    </>
  );
}

function renderEmptyStars(length: number): React.ReactElement | null {
  if (length === 0) {
    return null;
  }
  return (
    <>
      {" "}
      {Array(length)
        .fill(null)
        .map((_, index) => (
          <StarOutlined
            aria-label="empty-star"
            style={{ color: "gray", fontSize: 50 }}
            key={`empty-star-${index}`}
          />
        ))}{" "}
    </>
  );
}

const StarRating: React.FC<StarRatingProps> = ({
  percentage,
  totalStars,
}: StarRatingProps) => {
  const rating = percentage * totalStars;
  const fullStarsLength: number = Math.floor(rating);
  const halfStarLength: number = rating - fullStarsLength >= 0.5 ? 1 : 0;
  const emptyStarsLength: number =
    totalStars - fullStarsLength - halfStarLength;
  return (
    <Box m="auto">
      {renderFullStars(fullStarsLength)}
      {renderHalfStars(halfStarLength)}
      {renderEmptyStars(emptyStarsLength)}
    </Box>
  );
};

export default StarRating;
