import userEvent from "@testing-library/user-event";
import { describe, test } from "vitest";
import { InputUser } from "~/components/users";
import { render, screen } from "./testUtils";
const user = userEvent.setup();

const mockResponse = {
  createdAt: new Date("2023-01-22T23:13:24.594Z"),
  id: "f8224ace-8832-49d3-87d9-1c77a53177f2",
  name: "Jhon Doe",
  updatedAt: new Date("2023-01-22T23:13:24.594Z"),
};

describe("Input User", () => {
  test("should render input user properly", () => {
    render(<InputUser />, {});
    expect(screen.getByText(/name/i)).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/type the name here/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Save/i)).toBeInTheDocument();
  });

  test("should call save function properly", async () => {
    // const prismaMock = mockDeep<PrismaClient>();
    // await prismaMock.users.create.mockResolvedValue(mockResponse);

    render(<InputUser />, {});
    const btnSave = screen.getByRole("button", { name: /Save/i });
    expect(btnSave).toBeInTheDocument();
    const inputText = screen.getByRole("textbox", { name: /name/i });
    expect(inputText).toBeInTheDocument();
    await user.type(inputText, "Jhon Doe");
    await user.click(btnSave);
    expect(await screen.findByRole("textbox", { name: /name/i })).toHaveValue(
      ""
    );
  });
});
