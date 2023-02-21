import { FormSchema } from "~/components/users/usersTypes";
import { zodFetchAPI } from "./zodFetcher";

const BASE_URL_API = process.env.NEXT_PUBLIC_PUBLIC_BASE_URL + "/api/users";

const getHeaders = () => ({
  "Content-type": "application/json;charset=UTF-8",
});

const fetchAPI = (method: string, data: any) => {
  return fetch(BASE_URL_API, {
    method: method,
    body: JSON.stringify(data),
    headers: getHeaders(),
  });
};

export const getUsers = async () => {
  const data = await zodFetchAPI(BASE_URL_API);
  console.log("data", data);
  return data;
};

export const createUser = async (data: FormSchema["create"]) => {
  const response = await fetchAPI("POST", data);
  return response;
};

export const updateUser = async (data: FormSchema["update"]) => {
  const response = await fetchAPI("PUT", data);
  return response;
};

export const deleteUser = async (id: string) => {
  const response = await fetchAPI("DELETE", id);
  return response;
};
