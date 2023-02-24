import { render, screen } from "@testing-library/react";
import { describe, test } from "vitest";

const ExamplePage = () => {
  return <div>Example Page render tests</div>;
};

describe("Example Test", () => {
  test("should render Example Page properly", () => {
    render(<ExamplePage />);

    expect(screen.getByText(/Example Page render/i)).toBeInTheDocument();
  });
});
