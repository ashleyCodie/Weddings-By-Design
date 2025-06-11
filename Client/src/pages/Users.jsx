import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { userList } from "../redux/userSlice";
import SideNavbar from "../components/SideNavbar"
import GradientText from "../components/GradientText";

const Users = () => {
  const { users } = useSelector((state) => state.user);
  
  const dispatch = useDispatch();

    useEffect(() => {
      dispatch(userList());
    }, []);

    useEffect(() => {
      console.log("users", users);
    }, [users]);

  return (
    <div className="mb-16">
             
             <GradientText
                colors={["#f8fafc", "#71717a", "#1f2937", "#71717a", "#f8fafc"]}
                animationSpeed={3}
                showBorder={false}
                className="custom-class  brush ml-4 pl-60 mt-10 text-5xl font-extrabold text-center"
              >
                Users/Vendors
              </GradientText>
              <SideNavbar />

              <table className="p-10 ml-80">
        <thead className="p-10">
            <tr className="">
            <th className="">  
               
                </th>
                <th className="">  
                    <span className="flex brush p-2 ml-4 items-center text-3xl text-zinc-500 underline border-solid border-2 border-zinc-500">
                Name</span>
                </th>
                <th>  
                    <span className="flex brush p-2 items-center text-3xl text-zinc-500 underline border-solid border-2 border-zinc-500">
                Username</span>
                </th>
                <th>  
                    <span className="flex brush p-2 items-center text-3xl text-zinc-500 underline border-solid border-2 border-zinc-500">
                Email</span>
                </th>
                <th>  
                    <span className="flex brush p-2 items-center text-3xl text-zinc-500 underline border-solid border-2 border-zinc-500">
                Number</span>
                </th>
                <th>  
                    <span className="flex brush p-2 items-center text-3xl text-zinc-500 underline border-solid border-2 border-zinc-500">
                Position</span>
                </th>
                <th>  
                    <span className="flex brush p-2 items-center text-3xl text-zinc-500 underline border-solid border-2 border-zinc-500">
                Company</span>
                </th>
            </tr>
        </thead>
      
     <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                  
                  <img
              className="w-16 h-16 rounded-full mb-2"
              src={
                new URL(
                  `../assets/images/${user.avatar}`,
                  import.meta.url
                ).href
              }
              alt="user photo"
            />
                  <td className="p-4 text-zinc-500 text-2xl brush">{user.firstName} {user.lastName}</td>
                  <td className="p-4 text-zinc-500 text-2xl brush">{user.username}</td>
                  <td className="p-4  underline text-blue-600 text-2xl brush">{user.email}</td>
                  <td className="p-4 text-zinc-500 text-2xl brush">{user.contactNumber}</td>
                  <td className="p-4 text-zinc-500 text-2xl brush">{user.roles[0]}</td>
                  <td className="p-4 text-zinc-500 text-2xl brush">{user.company}</td>
                </tr>
              ))}
          </tbody>
    </table>
    </div>
  )
}

export default Users