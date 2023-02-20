import { useRouter } from "next/router";
import { InputUser, ListUsers } from "~/components/users";

const BASE_URL_API = "http://localhost:3000/api/users";

const getUsers = async () => {
  const data = await fetch(BASE_URL_API);
  return data.json();
};
const Home = async () => {
  const data = await getUsers();
  return (
    <div className="container w-2/4">
      <InputUser isLoading={false} />
      <ListUsers isLoading={false} data={data?.data} />
    </div>
  );
};

export default Home;
