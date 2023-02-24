import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";

import { server } from "~/mocks/server";
import "./src/styles/globals.css";

beforeAll(() => {
  server.listen();
});

afterAll(() => {
  server.close();
});

afterEach(() => {
  server.resetHandlers();
});
