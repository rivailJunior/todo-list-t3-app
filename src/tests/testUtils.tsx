import { render } from "@testing-library/react";

import ListProvider from "~/context/listContext";

const AppWrapper = ({ children }: { children: JSX.Element }) => {
  return <ListProvider>{children}</ListProvider>;
};

const customRender = (ui: any, options: any) => {
  render(ui, { wrapper: AppWrapper, ...options });
};

export * from "@testing-library/react";
export { customRender as render };
