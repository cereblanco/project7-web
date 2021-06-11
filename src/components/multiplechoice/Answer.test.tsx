import { render, screen } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";

import Answer, { AnswerProps } from "./Answer";

describe("Answer", () => {
  let testComponent: React.ReactElement;
  const testProps: AnswerProps = {
    text: "Correct Answer!",
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

  it("renders the answer", () => {
    render(testComponent);
    expect(screen.getByText("Correct Answer!")).toBeInTheDocument();
  });

  it("hides the answer", () => {
    render(<Answer text="Correct Answer!" visible={false} />);
    expect(screen.queryByText("Correct Answer!")).not.toBeInTheDocument();
  });
});
