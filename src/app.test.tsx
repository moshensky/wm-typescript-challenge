import { render, screen } from "@testing-library/react";
import { mockMatchMedia } from "hooks/useDarkMode";

import App from "./app";

test("renders lazy component", async () => {
  mockMatchMedia();
  render(<App />);

  const textToMatch = await screen.findByText(/You can use the api endpoint/);
  expect(textToMatch).toBeInTheDocument();
});
