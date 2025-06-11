import { useState } from "react";
import { useNavigate } from "react-router"
import { useSelector, useDispatch } from "react-redux"
import { addUser } from "../redux/userSlice"
import { toast } from "react-toastify";
import GradientText from "../components/GradientText";

const AddNewUser = () => {
  const [userForm, setUserForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    roles: "",
    avatar: "",
    contactNumber: "",
    company: ""
  });

  const dispatch = useDispatch()
  const navigate = useNavigate()

   const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(addUser({ ...userForm }))
      toast.success("User Added Successfully")
      navigate("/dashboard")
    };
  return (
    <div className="h-screen">
      <GradientText
        colors={["#f8fafc", "#71717a", "#1f2937", "#71717a", "#f8fafc"]}
        animationSpeed={3}
        showBorder={false}
        className="custom-class  brush ml-44 pl-60 mt-10 text-5xl font-extrabold text-center"
      >
        Add New User
      </GradientText>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-6 pb-10 ml-54 md:grid-cols-2 ps-20 pe-20 mt-10 ">
          <div>
            <label
              htmlFor="firstName"
              className="block brush mb-2 text-2xl font-medium text-zinc-500 dark:text-zinc-500"
            >
              {" "}
              First Name
            </label>
            <input
              value={userForm.firstName}
              onChange={(e) =>
                setUserForm({ ...userForm, firstName: e.target.value })
              }
              type="text"
              id="firstName"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              required
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block brush mb-2 text-2xl font-medium text-zinc-500 dark:text-zinc-500"
            >
              Last Name
            </label>
            <input
              value={userForm.lastName}
              onChange={(e) =>
                setUserForm({ ...userForm, lastName: e.target.value })
              }
              type="text"
              id="lastName"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Doe"
              required
            />
          </div>
          <div>
            <label
              htmlFor="username"
              className="block brush mb-2 text-2xl font-medium text-zinc-500 dark:text-zinc-500"
            >
              {" "}
              Username
            </label>
            <input
              value={userForm.username}
              onChange={(e) =>
                setUserForm({ ...userForm, username: e.target.value })
              }
              type="text"
              id="username"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Brooks1234"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block brush mb-2 text-2xl font-medium text-zinc-500 dark:text-zinc-500"
            >
              Password
            </label>
            <input
              value={userForm.password}
              onChange={(e) =>
                setUserForm({ ...userForm, password: e.target.value })
              }
              type="text"
              id="password"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="••••••••"
              required
            />
          </div>
          <div>
            <label
              htmlFor="contactNumber"
              className="block brush mb-2 text-2xl font-medium text-zinc-500 dark:text-zinc-500"
            >
              Contact Number
            </label>
            <input
              value={userForm.contactNumber}
              onChange={(e) =>
                setUserForm({ ...userForm, contactNumber: e.target.value })
              }
              type="tel"
              id="contactNumber"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="123-450-6758"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
            />
          </div>
          <div>
            <label
              htmlFor="avatar"
              className="block brush mb-2 text-2xl font-medium text-zinc-500 dark:text-zinc-500"
            >
              Avatar
            </label>
            <input
              value={userForm.avatar}
              onChange={(e) =>
                setUserForm({ ...userForm, avatar: e.target.value })
              }
              type="text"
              id="avatar"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="photo.jpg"
              required
            />
          </div>
          <div>
            <label
              htmlFor="roles"
              className="block brush mb-2 text-2xl font-medium text-zinc-500 dark:text-zinc-500"
            >
              Role
            </label>
            <input
              value={userForm.roles}
              onChange={(e) =>
                setUserForm({ ...userForm, roles: e.target.value })
              }
              type="tel"
              id="roles"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Project Manager"
              // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
            />
          </div>
          <div className="">
            <label
              htmlFor="email"
              className="block brush mb-2 text-2xl font-medium text-zinc-500 dark:text-zinc-500"
            >
              Email
            </label>
            <input
              value={userForm.email}
              onChange={(e) =>
                setUserForm({ ...userForm, email: e.target.value })
              }
              type="text"
              id="email"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="john.doe@company.com"
              required
            />
          </div>
        </div>
        <div className="mb-6 ml-54 ps-20 pe-20">
          <label
            htmlFor="company"
            className="block brush mb-2 text-2xl font-medium text-zinc-500 dark:text-zinc-500"
          >
            Company
          </label>
          <input
           value={userForm.company}
           onChange={(e)=> setUserForm({...userForm, company: e.target.value })}
            type="company"
            id="company"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Weddings By Design"
            required
          />
        </div>
     
        <button
          type="submit"
          className="text-white brush bg-zinc-500 ml-74 mt-10 mb-16 hover:bg-zinc-800 focus:ring-4 focus:outline-none focus:ring-zinc-300 font-medium rounded-lg text-2xl w-full sm:w-auto px-5 py-2.5 text-center dark:bg-zinc-500 dark:hover:bg-zinc-800 dark:focus:ring-zinc-800"
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddNewUser;