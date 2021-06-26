import { render, screen } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";

import StarRating, { StarRatingProps } from "./StarRating";

describe("Star rating", () => {
  let testComponent: React.ReactElement;
  const testProps: StarRatingProps = {
    percentage: 0.3,
    totalStars: 5,
  };

  beforeEach(() => {
    testComponent = <StarRating {...testProps} />;
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(testComponent, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the star ratings correctly", () => {
    render(testComponent);
    expect(screen.queryByLabelText("full-star")).toBeInTheDocument();
    expect(screen.queryByLabelText("half-star")).toBeInTheDocument();
    expect(screen.queryAllByLabelText("empty-star")).toHaveLength(3);
  });
});
