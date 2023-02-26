import { ListUsers } from "~/components/users";
import { mockUserData } from "./mockData/users";
import { render, screen, UserEvt } from "./testUtils";

describe("List Users", () => {
  test("should render home properly", async () => {
    render(<ListUsers data={mockUserData} />);
    expect(await screen.findAllByTestId(/action_edit/i)).toHaveLength(2);
    expect(await screen.findAllByTestId(/action_delete/i)).toHaveLength(2);
  });

  test("should render list withou data", async () => {
    render(<ListUsers data={[]} />);
    expect(await screen.queryAllByTestId(/action_edit/i)).toHaveLength(0);
    expect(await screen.queryAllByTestId(/action_delete/i)).toHaveLength(0);
  });

  test("should open modal with one user selected to be deleted", async () => {
    render(<ListUsers data={mockUserData} />);
    const btnDelete = await screen.findAllByTestId(/action_delete/i);
    await UserEvt.click(btnDelete[0] as any);
    expect(
      await screen.findByText(/Are you sure do you want to delete user:/)
    ).toBeInTheDocument();
    expect(await screen.findByText("User 10")).toBeInTheDocument();
    await UserEvt.click(screen.getByText(/Cancel/i));
    expect(
      await screen.queryByText(/Are you sure do you want to delete user:/)
    ).not.toBeInTheDocument();
  });
});
