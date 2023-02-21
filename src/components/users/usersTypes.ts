import * as z from "zod";
import { usersSchema } from "~/service/zodFetcher";

export const formSchema = z.object({
  name: z
    .string()
    .min(5, { message: "Minimum characters is 5" })
    .max(30, { message: "Maximum characters is 30" }),
  id: z.string().min(1, { message: "Id is necessary" }),
});

export interface FormSchema {
  create: Pick<z.infer<typeof formSchema>, "name">;
  update: z.infer<typeof formSchema>;
}

export interface IListUsers {
  data: z.infer<typeof usersSchema> | undefined;
  isLoading: boolean;
}

export interface IInputUser {
  isLoading: boolean;
}
