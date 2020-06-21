import React from "react";
import ReactDOM from "react-dom";
import { render, screen } from "@testing-library/react";

import Answer, { AnswerProps } from "./Answer";

describe("Answer", () => {
  let testComponent: React.ReactElement;
  const testProps: AnswerProps = {
    answer: "Correct Answer!",
    showAnswer: true,
    isCorrect: true,
  };

  beforeEach(() => {
    testComponent = <Answer {...testProps} />;
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(testComponent, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders correct answer", () => {
    render(testComponent);
    expect(screen.getByText("Correct Answer!")).toBeInTheDocument();
  });
});
