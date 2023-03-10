import { InputUser, ListUsers } from "~/components/users";
import { getUsers } from "~/service/usersService";

const Home = async () => {
  const users = await getUsers();
  return (
    <div className="container w-2/4">
      <InputUser />
      <ListUsers data={users} />
    </div>
  );
};

export default Home;
