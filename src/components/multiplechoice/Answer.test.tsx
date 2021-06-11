import React from "react";
import ReactDOM from "react-dom";
import { render, screen } from "@testing-library/react";

import Answer, { AnswerProps } from "./Answer";

describe("Answer", () => {
  let testComponent: React.ReactElement;
  const testProps: AnswerProps = {
    isCorrect: true,
    text: "Correct Answer",
    visible: true,
  };

  beforeEach(() => {
    testComponent = <Answer {...testProps} />;
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(testComponent, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("hides correct answer when isCorrect is true", () => {
    render(testComponent);
    expect(screen.queryByText("ANSWER")).not.toBeInTheDocument();
    expect(screen.queryByText("Correct Answer")).not.toBeInTheDocument();
  });

  it("shows correct answer when isCorrect is false", () => {
    render(<Answer {...testProps} isCorrect={false} />);
    expect(screen.getByText("ANSWER")).toBeInTheDocument();
    expect(screen.getByText("Correct Answer")).toBeInTheDocument();
  });
});
