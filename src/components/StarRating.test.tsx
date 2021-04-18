import React from "react";
import ReactDOM from "react-dom";

import { render, screen } from "@testing-library/react";

import StarRating, { StarRatingProps } from "./StarRating";

describe("Star rating", () => {
  let testComponent: React.ReactElement;
  const testProps: StarRatingProps = {
    percentage: 1,
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
    expect(screen.queryAllByLabelText("full-star")).toHaveLength(5);
    expect(screen.queryAllByLabelText("half-star")).toHaveLength(0);
    expect(screen.queryAllByLabelText("empty-star")).toHaveLength(0);
  });
});
