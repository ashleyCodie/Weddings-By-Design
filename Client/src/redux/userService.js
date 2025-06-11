import axios from "axios";

const userService = {
  userList: async () => {
    return await axios.get(
      `${import.meta.env.VITE_NODE_SERVER_URL}/users/list`
    );
  },
  addUser: async (
    firstName,
    lastName,
    email,
    username,
    password,
    roles,
    avatar,
    contactNumber,
    company
  ) => {
    return await axios.post(
      `${import.meta.env.VITE_NODE_SERVER_URL}/users`,
      {
        firstName,
        lastName,
        email,
        username,
        password,
        roles,
        avatar,
        contactNumber,
        company
      },
      { headers: { "Content-Type": "application/json" } }
    );
  },
};

export default userService;