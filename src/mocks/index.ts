// eslint-disable-next-line import/no-extraneous-dependencies
import { MockedRequest } from "msw";

/* eslint-disable */
/* @ts-nocheck */
export const initMocks = () => {
  console.log("👷🏻‍♂️ Adding MSW browser mocks");
  const { worker } = require("./browser");
  worker.start({
    waitUntilReady: true,
    serviceWorker: {
      url: `${process.env.PUBLIC_URL}/mockServiceWorker.js`,
    },
    onUnhandledRequest: (req: MockedRequest) => {},
  });
};

initMocks();
