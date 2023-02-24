import axios from "axios";
import { FormSchema } from "~/components/users/usersTypes";
import { zodFetchAPI } from "./zodFetcher";

const BASE_URL = process.env.NEXT_PUBLIC_PUBLIC_BASE_URL || "";

const BASE_URL_API = BASE_URL + "/api/users";

const getHeaders = () => ({
  "Content-type": "application/json;charset=UTF-8",
});

const AxiosInstance = axios.create({
  baseURL: BASE_URL_API,
  timeout: 1000,
  headers: getHeaders(),
});

const fetchAPI = async (method: string, body: any) => {
  return await AxiosInstance({ method, data: JSON.stringify(body) });
};

export const getUsers = async () => {
  const data = await zodFetchAPI(BASE_URL_API);
  return data;
};

export const createUser = async (data: FormSchema["create"]) => {
  try {
    const response = await fetchAPI("POST", data);
    return response.data;
  } catch (error) {}
};

export const updateUser = async (data: FormSchema["update"]) => {
  const response = await fetchAPI("PUT", data);
  return response;
};

export const deleteUser = async (id: string) => {
  const response = await fetchAPI("DELETE", { id });
  return response;
};
