import { FormSchema } from "~/components/users/usersTypes";

const BASE_URL_API = "http://localhost:3000/api/users";

export const getUsers = async () => {
  const data = await fetch(BASE_URL_API);
  return data.json();
};

export const createUser = async (data: FormSchema["create"]) => {
  const response = await fetch(BASE_URL_API, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-type": "application/json;charset=UTF-8" },
  });
  return response;
};

export const updateUser = async (data: FormSchema["update"]) => {
  const response = await fetch(BASE_URL_API, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: { "Content-type": "application/json;charset=UTF-8" },
  });
  return response;
};

export const deleteUser = async (id: string) => {
  const response = await fetch(BASE_URL_API, {
    method: "DELETE",
    body: JSON.stringify({ id }),
    headers: { "Content-type": "application/json;charset=UTF-8" },
  });
  return response;
};
