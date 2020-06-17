import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

describe("App", () => {
  let testComponent: React.ReactElement;

  beforeEach(() => {
    testComponent = <App />;
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(testComponent, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
