import { describe, test } from "vitest";
import { InputUser, ListUsers } from "~/components/users";
import { mockUserData } from "./mockData/users";
import { render, screen, UserEvt } from "./testUtils";

const PageHelperComponent = () => {
  return (
    <>
      <InputUser />
      <ListUsers data={mockUserData} />
    </>
  );
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

  test("should create new user properly", async () => {
    render(<InputUser />);
    const btnSave = screen.getByRole("button", { name: /Save/i });
    expect(btnSave).toBeInTheDocument();
    const inputText = screen.getByRole("textbox", { name: /name/i });
    expect(inputText).toBeInTheDocument();
    await UserEvt.type(inputText, "Jhon Doe");
    await UserEvt.click(btnSave);
    expect(await screen.findByRole("textbox", { name: /name/i })).toHaveValue(
      ""
    );
  });

  test("should update user properly", async () => {
    render(<PageHelperComponent />);
    const btnEdit: [] | any = screen.getAllByTestId(/action_edit/i);
    expect(btnEdit).toHaveLength(2);
    await UserEvt.click(btnEdit[0]);
    const inputUser = await screen.findByRole("textbox", { name: /name/i });
    expect(inputUser).toHaveValue("User 10");
    const btnUpdate = await screen.findByRole("button", { name: /update/i });
    expect(btnUpdate).toBeInTheDocument();
    await UserEvt.type(inputUser, "User 12");
    await UserEvt.click(btnUpdate);
    expect(await screen.findByRole("textbox", { name: /name/i })).toHaveValue(
      ""
    );
  });
});
