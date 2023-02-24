import { ListUsers } from "~/components/users";
import { render } from "./testUtils";

describe("List Users", () => {
  test("should render home properly", async () => {
    render(<ListUsers data={[]} />, {});
  });
});
