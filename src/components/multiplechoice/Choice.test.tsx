import React from "react";
import ReactDOM from "react-dom";

import Choice, { ChoiceProps } from "./Choice";

describe("Choice", () => {
  let testComponent: React.ReactElement;
  const testProps: ChoiceProps = {
    key: "1",
    value: "Choice #1",
    isChecked: true,
    disabled: false,
    onChange: jest.fn(),
  };

  beforeEach(() => {
    testComponent = <Choice {...testProps} />;
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(testComponent, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
