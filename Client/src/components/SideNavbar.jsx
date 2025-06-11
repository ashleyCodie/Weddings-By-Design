import { Link, useLocation, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authSlice";

const SideNavbar = () => {
  const { loading, isLoggedIn, user } = useSelector((state) => state.auth);
  const { projects } = useSelector((state) => state.project);
  const { messages } = useSelector((state) => state.message);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log("messages", messages);
  }, [messages]);

  const handleLogout = async () => {
    const token = sessionStorage.getItem("token");
    if (token) {
      const logoutToken = token.split(",")[0];
      dispatch(logout(logoutToken));
    }
  };

  return (
    <div>
      <aside
        id="sidebar-multi-level-sidebar"
        className="fixed top-0 left-0 z-10 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-pink-300 dark:bg-pink-300">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to="/dashboard"
                className="flex items-center p-2 text-zinc-500 rounded-lg dark:text-zinc-500 hover:bg-white dark:hover:bg-white group"
              >
                <svg
                  className="w-5 h-5 mt-20 text-zinc-500 transition duration-75 dark:text-zinc-500 group-hover:text-zinc-500 dark:group-hover:text-zinc-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="brush text-2xl ms-3 mt-20">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="flex brush text-2xl items-center p-2 text-zinc-500 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:text-zinc-500 group"
              >
                <svg
                  className="shrink-0 w-5 h-5 text-zinc-500 transition duration-75 dark:text-zinc-500 group-hover:text-zinc-500 dark:group-hover:text-zinc-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Projects</span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-zinc-500 bg-white rounded-full dark:bg-white dark:text-zinc-500">
                  {projects.length}
                </span>
              </Link>
            </li>
            {user.roles.includes("Project Manager") && (
              <li>
                <Link
                  to="/calendar"
                  className="flex brush text-2xl items-center p-2 text-zinc-500 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:text-zinc-500 group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-6 text-zinc-500"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                    />
                  </svg>

                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Calendar
                  </span>
                </Link>
              </li>
            )}
            {user.roles.includes("Project Manager") && (
              <li>
                <Link
                  to="/inbox"
                  className="flex brush text-2xl items-center p-2 text-zinc-500 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:text-zinc-500 group"
                >
                  <svg
                    className="shrink-0 w-5 h-5 text-zinc-500 transition duration-75 dark:text-zinc-500 group-hover:text-zinc-500 dark:group-hover:text-zinc-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">Inbox</span>
                  <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-zinc-500 bg-white rounded-full dark:bg-white dark:text-zinc-500">
                    {messages.length}
                  </span>
                </Link>
              </li>
            )}
            <li>
              <Link
                to="/users"
                className="flex brush text-2xl items-center p-2 text-zinc-500 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:text-zinc-500 group"
              >
                <svg
                  className="shrink-0 w-5 h-5 text-zinc-500 transition duration-75 dark:text-zinc-500 group-hover:text-zinc-500 dark:group-hover:text-zinc-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
              </Link>
            </li>
            {user.roles.includes("Project Manager") && (
              <li>
                <Link
                  to="/add-user"
                  className="flex brush text-2xl items-center text-zinc-500 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:text-zinc-500 group"
                >
                  <svg
                    className="shrink-0 w-7 h-7 text-zinc-500 transition duration-75 dark:text-zinc-500 group-hover:text-zinc-500 dark:group-hover:text-zinc-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Add New User
                  </span>
                </Link>
              </li>
            )}
            <li>
              <Link
                to="/packages"
                className="flex brush text-2xl items-center p-2 text-zinc-500 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:text-zinc-500 group"
              >
                <svg
                  className="shrink-0 w-5 h-5 text-zinc-500 transition duration-75 dark:text-zinc-500 group-hover:text-zinc-500 dark:group-hover:text-zinc-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Packages</span>
              </Link>
            </li>
            <li>
              <span
                onClick={handleLogout}
                className="flex brush text-2xl items-center p-2 text-zinc-500 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:text-zinc-500 group"
              >
                <svg
                  className="shrink-0 w-5 h-5 text-zinc-500 transition duration-75 dark:text-zinc-500 group-hover:text-zinc-500 dark:group-hover:text-zinc-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                  />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
              </span>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default SideNavbar;