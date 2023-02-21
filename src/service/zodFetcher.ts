import { z } from "zod";
import { createZodFetcher } from "zod-fetch";

const fetchWithZod = createZodFetcher();

const transformDateValue = (date: string) => {
  return new Date(date).toLocaleDateString("pt-BR", {
    day: "numeric",
    year: "numeric",
    month: "short",
  });
};

export const usersSchema = z.array(
  z
    .object({
      id: z.string(),
      createdAt: z.string().transform(transformDateValue),
      updatedAt: z.string().transform(transformDateValue),
      name: z.string().transform((value) => value.toLocaleLowerCase()),
    })
    .transform(({ id, updatedAt, name }) => ({ id, updatedAt, name }))
);

export const zodFetchAPI = async (url: string) => {
  return await fetchWithZod(usersSchema, url);
};
