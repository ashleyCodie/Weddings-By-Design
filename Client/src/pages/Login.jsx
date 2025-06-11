import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { authLogin } from "../redux/authSlice";
import GradientText from "../components/GradientText";
import wedding6 from "../assets/images/wedding6.jpg"

const Login = () => {
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, isLoggedIn, user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isLoggedIn && user.token) {
      navigate("/dashboard");
    }
  }, [isLoggedIn]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loginForm.email === "" || loginForm.password === "") {
        //show some error message
    } else {
      dispatch(authLogin({ ...loginForm }));
    }
  };

  return (
    <div className="h-screen">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-60 w-auto mt-20 mb-10 border border-zinc-500 border-4 rounded-lg"
          src={wedding6}
          alt="Your Company"
        />
         <GradientText
              colors={["#f8fafc", "#71717a", "#1f2937", "#71717a", "#f8fafc"]}
              animationSpeed={3}
              showBorder={false}
              className="custom-class brush text-5xl"
            >
              Login To Your Account
            </GradientText>
      </div>

      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block brush mt-10 mb-2 text-2xl font-medium text-zinc-500"
          >
            Your email
          </label>
          <input
            value={loginForm.email}
            onChange={(e) =>
              setLoginForm({ ...loginForm, email: e.target.value })
            }
            type="email"
            id="email"
            className="bg-white brush border border-black text-black text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-black dark:focus:border-black"
            placeholder="Email"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 brush text-2xl font-medium text-zinc-500 "
          >
            Your password
          </label>
          <input
            value={loginForm.password}
            onChange={(e) =>
              setLoginForm({ ...loginForm, password: e.target.value })
            }
            type="password"
            id="password"
            className="bg-white brush border border-black text-black text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-black dark:focus:border-black"
            placeholder="Password"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white brush bg-zinc-500 hover:bg-zinc-800 focus:ring-4 focus:outline-none focus:ring-zinc-300 font-medium rounded-lg text-2xl w-full sm:w-auto px-5 py-2.5 text-center dark:bg-zinc-500 dark:hover:bg-zinc-800 dark:focus:ring-zinc-800"
        >
          Login
        </button>
      </form>

      {loading && <h1>LOADING...</h1>}
    </div>
  );
};

export default Login;