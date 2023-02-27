"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { createUser, updateUser } from "~/service/usersService";
import { ListContext } from "../../context/listContext";
import { formSchema, FormSchema } from "./usersTypes";

const PRIMARY_BUTTON =
  "bg-blue-500 bottom-0 right-0 mt-2 inline-flex w-1/4 justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-400";
// const DISABLED_BUTTON =
//   "bg-gray-200 bottom-0 right-0 mt-2 inline-flex w-1/4 justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-100 text-black";

export function InputUser() {
  const {
    handleSubmit,
    register,
    reset: resetForm,
    setValue,
    formState: { errors },
  } = useForm<FormSchema["create"]>({
    resolver: zodResolver(formSchema.pick({ name: true })),
  });

  const { user, setUser } = useContext(ListContext);

  useEffect(() => {
    if (user?.name.length) {
      setValue("name", user.name);
    }
  }, [user]);

  const handleCreateUser = async (data: FormSchema["create"]) => {
    try {
      await createUser({ name: data.name });
      //TODO: improve the way to update page to show new users
      window.location.assign("/");
    } catch (error) {
      console.error("error => ", error);
    } finally {
      resetForm();
      setUser(null);
    }
  };

  const handleUpdateUser = (data: FormSchema["create"]) => {
    try {
      updateUser({ id: user?.id as string, name: data.name });
      //TODO: improve the way to update page to show users updated
      window.location.assign("/");
    } catch (error) {
      console.error("error on update", error);
    } finally {
      resetForm();
      setUser(null);
    }
  };

  const onHandleSubmit = (data: FormSchema["create"]) => {
    user ? handleUpdateUser(data) : handleCreateUser(data);
  };

  return (
    <div className="relative my-2 mt-10 flex h-28 min-w-full flex-col">
      <form onSubmit={handleSubmit(onHandleSubmit)}>
        <div className="flex flex-col justify-start">
          <label
            htmlFor="inputUser"
            className="mb-2 text-lg font-light capitalize text-gray-600"
          >
            Name
          </label>
          <input
            id="inputUser"
            type="text"
            {...register("name")}
            placeholder="Type the name here"
            className="block w-full rounded-lg border border-stone-400 p-2 text-lg font-light capitalize text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-lg"
          />
          {errors.name?.message && (
            <p className="mt-1 rounded-md bg-red-400 p-1 text-sm font-light capitalize text-white">
              {errors.name?.message as string}
            </p>
          )}
          <div className="flex justify-end ">
            <button type="submit" className={PRIMARY_BUTTON}>
              {user ? "Update" : "Save"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
