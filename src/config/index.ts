import React from "react";
import * as ReactDOM from "react-dom/client";

if (process.env.REACT_APP_ENABLE_AXE_CORE === "enabled") {
  // eslint-disable-next-line import/no-extraneous-dependencies
  import("@axe-core/react").then((axe) => {
    axe.default(React, ReactDOM, 1000);
    // eslint-disable-next-line no-console
    console.info("👷 Axe-core accessibility testing library enabled");
  });
}

export const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
