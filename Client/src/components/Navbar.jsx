import { Link, useNavigate, useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authSlice"
import GradientText from "../components/GradientText";
import wedding2 from "../assets/images/wedding2.jpg";
import countrycake from "../assets/images/countrycake.jpg";

const Navbar = () => {
  const { loading, isLoggedIn, user } = useSelector((state) => state.auth);

  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch();

  const handleLogout = async () => {
    const token = sessionStorage.getItem("token")
    if (token) {
      const logoutToken = token.split(",")[0]
      dispatch(logout(logoutToken))
      navigate("/")
    }
  }

  return (
    <div>
      <nav className="bg-pink-300 relative z-20 border-pink-300 dark:bg-pink-300 mb-10">
        <div className=" flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={wedding2} className="h-16 rounded-lg border  border-zinc-500 border-4" alt="My Logo" />
            {/* <span className="self-center text-5xl font-semibold whitespace-nowrap dark:text-zinc-500 brush">Weddings By Design</span> */}
            <GradientText
              colors={["#f8fafc", "#71717a", "#1f2937", "#71717a", "#f8fafc"]}
              animationSpeed={3}
              showBorder={false}
              className="custom-class brush text-5xl"
            >
              Weddings By Design
            </GradientText>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-pink-300 dark:focus:ring-pink-300"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <button
            type="button"
            className="flex text-sm bg-pink-300 rounded-full md:me-10 focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-300 ring-pink-300"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
          >
            <span className="sr-only">Open user menu</span>
      
          </button>
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-pink-300 md:dark:bg-pink-300 dark:border-pink-300">
              <li>
                <Link
                  to="/"
                  className={`block brush text-3xl py-2 px-3 mt-3 text-gray-900 rounded-sm hover:bg-zinc-500 md:hover:bg-transparent md:border-0 md:hover:text-zinc-500 md:p-0 dark:text-white ${location.pathname === "/" ? "dark:text-zinc-500" : "dark:text-white"} md:dark:hover:text-zinc-500 dark:hover:bg-zinc-500 dark:hover:text-white md:dark:hover:bg-transparent`}
                  aria-current="page"
                >
                  Home
             
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={`block brush text-3xl py-2 px-3 mt-3 text-gray-900 rounded-sm hover:bg-zinc-500 md:hover:bg-transparent md:border-0 md:hover:text-zinc-500 md:p-0 dark:text-white ${location.pathname === "/about" ? "dark:text-zinc-500" : "dark:text-white"} md:dark:hover:text-zinc-500 dark:hover:bg-zinc-500 dark:hover:text-zinc-500 md:dark:hover:bg-transparent`}
                >
                  About
             
                </Link>
              </li>
              <li>
              <Link
                  to="/gallery"
                  className={`block brush text-3xl py-2 px-3 mt-3 text-gray-900 rounded-sm hover:bg-zinc-500 md:hover:bg-transparent md:border-0 md:hover:text-zinc-500 md:p-0 dark:text-white ${location.pathname === "/gallery" ? "dark:text-zinc-500" : "dark:text-white"} md:dark:hover:text-zinc-500 dark:hover:bg-zinc-500 dark:hover:text-zinc-500 md:dark:hover:bg-transparent`}
                >
                  Gallery
             
                </Link>
              </li>
              <li>
                <Link
                  to="/packages"
                  className={`block brush text-3xl py-2 px-3 mt-3 text-gray-900 rounded-sm hover:bg-zinc-500 md:hover:bg-transparent md:border-0 md:hover:text-zinc-500 md:p-0 dark:text-white ${location.pathname === "/packages" ? "dark:text-zinc-500" : "dark:text-white"} md:dark:hover:text-zinc-500 dark:hover:bg-zinc-500 dark:hover:text-zinc-500 md:dark:hover:bg-transparent`}
                >
                  Packages
             
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className={`block brush text-3xl py-2 px-3 mt-3 text-gray-900 rounded-sm hover:bg-zinc-500 md:hover:bg-transparent md:border-0 md:hover:text-zinc-500 md:p-0 dark:text-white ${location.pathname === "/blog" ? "dark:text-zinc-500" : "dark:text-white"} md:dark:hover:text-zinc-500 dark:hover:bg-zinc-500 dark:hover:text-zinc-500 md:dark:hover:bg-transparent`}
                >
                  Blog
             
                </Link>
              </li>

            {isLoggedIn && (
             <li>
                <Link
                  to="/dashboard"
                  className={`block brush text-3xl py-2 px-3 mt-3 text-gray-900 rounded-sm hover:bg-zinc-500 md:hover:bg-transparent md:border-0 md:hover:text-zinc-500 md:p-0 dark:text-white ${location.pathname === "/dashboard" ? "dark:text-zinc-500" : "dark:text-white"} md:dark:hover:text-zinc-500 dark:hover:bg-zinc-500 dark:hover:text-white md:dark:hover:bg-transparent`}
                >
                  Dashboard
                </Link>
              </li> )}
              
              <li>
                <Link
                  to="/contact-us"
                  className={`block brush text-3xl py-2 px-3 mt-3 text-gray-900 rounded-sm hover:bg-zinc-500 md:hover:bg-transparent md:border-0 md:hover:text-zinc-500 md:p-0 ${location.pathname === "/contact-us" ? "dark:text-zinc-500" : "dark:text-white"} dark:text-white md:dark:hover:text-zinc-500 dark:hover:bg-zinc-500 dark:hover:text-white md:dark:hover:bg-transparent`}
                >
                  Contact Us
             
                </Link>
              </li>

             {!isLoggedIn ? ( <li>
                <Link
                  to="/login"
                  className={`block brush text-3xl py-2 px-3 mt-3 text-gray-900 rounded-sm hover:bg-zinc-500 md:hover:bg-transparent md:border-0 md:hover:text-zinc-500 md:p-0 ${location.pathname === "/login" ? "dark:text-zinc-500" : "dark:text-white"} dark:text-white md:dark:hover:text-zinc-500 dark:hover:bg-zinc-500 dark:hover:text-white md:dark:hover:bg-transparent`}
                >
                  Login
                </Link>
              </li>)
              :
              (<li>
                <span
                 onClick={handleLogout}
                  className={`block brush text-3xl py-2 px-3 mt-3 text-gray-900 rounded-sm hover:bg-zinc-500 md:hover:bg-transparent md:border-0 md:hover:text-zinc-500 md:p-0 ${location.pathname === "/login" ? "dark:text-zinc-500" : "dark:text-white"} dark:text-white md:dark:hover:text-zinc-500 dark:hover:bg-zinc-500 dark:hover:text-white md:dark:hover:bg-transparent`}
                >
                  Logout
                </span>
              </li>)}

              <img
              className="w-16 h-16 rounded-full border  border-zinc-500 border-4"
              src={wedding2}
              // src={
              //   new URL(
              //     `../assets/${user.avatar}`,
              //     import.meta.url
              //   ).href
              // }
              alt="user photo"
            />
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;