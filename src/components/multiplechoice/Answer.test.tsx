import React from "react";
import ReactDOM from "react-dom";
import { render, screen } from "@testing-library/react";

import Answer, { AnswerProps } from "./Answer";

describe("Answer", () => {
  const testProps: AnswerProps = {
    isCorrect: true,
    text: "Correct Answer",
    visible: true,
  };

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Answer {...testProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("shows correct answer when isCorrect is false", () => {
    render(<Answer {...testProps} isCorrect={false} />);
    expect(screen.getByText("ANSWER")).toBeInTheDocument();
    expect(screen.getByText("Correct Answer")).toBeInTheDocument();
  });

  it("hides correct answer when isCorrect is true", () => {
    render(<Answer {...testProps} />);
    expect(screen.queryByText("ANSWER")).not.toBeInTheDocument();
    expect(screen.queryByText("Correct Answer")).not.toBeInTheDocument();
  });
});
