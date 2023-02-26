import { render } from "@testing-library/react";

import userEvent from "@testing-library/user-event";
import ListProvider from "~/context/listContext";
const user = userEvent.setup();

const AppWrapper = ({ children }: { children: JSX.Element }) => {
  return <ListProvider>{children}</ListProvider>;
};

const customRender = (ui: any, options?: any) => {
  render(ui, { wrapper: AppWrapper, ...options });
};

export * from "@testing-library/react";
export { customRender as render };
export { user as UserEvt };
