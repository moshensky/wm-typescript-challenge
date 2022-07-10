import { render, screen } from "@testing-library/react";
import { mockMatchMedia } from "hooks";

import App from "./app";

test("renders lazy component", async () => {
  mockMatchMedia();
  render(<App />);

  const textToMatch = await screen.findByText(/Popular cocktails/);
  expect(textToMatch).toBeInTheDocument();
});
