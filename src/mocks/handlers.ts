import { Users } from "@prisma/client";
import { rest } from "msw";

const mockData = {
  name: "jhon doe",
  id: "1",
  updatedAt: new Date(),
  createdAt: new Date(),
};

const handlers = [
  rest.post("/api/users", (req, res, ctx) => {
    return res(ctx.status(201), ctx.json([mockData]));
  }),
  rest.get("/api/users", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json<Users[]>([mockData]));
  }),
  rest.put("/api/users", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({}));
  }),
];

export { handlers };
