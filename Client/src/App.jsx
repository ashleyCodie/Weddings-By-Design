import { useEffect } from "react";
import { Routes, Route } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import DashboardLayout from "./layouts/DashboardLayout"
import Dashboard from "./pages/Dashboard";
import ContactUs from "./pages/ContactUs";
import Gallery from "./pages/Gallery";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail"
import ProjectTasks from "./pages/ProjectTasks"
import Inbox from "./pages/Inbox";
import MessageDetails from "./pages/MessageDetails"
import Packages from "./pages/Packages";
import Blog from "./pages/Blog"
import Users from "./pages/Users";
import AddNewUser from "./pages/AddNewUser";
import EventCalendar from "./pages/EventCalendar";
import PrivateRoute from "./components/PrivateRoute";
import AddProject from "./pages/AddProject";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageNotFound from "./pages/PageNotFound";
import { checkLogin } from "./redux/authSlice";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user.token) {
      const checkToken = async () => {
        const loginToken = user.token.split(",")[0];
        dispatch(checkLogin(loginToken));
      };
      checkToken();
    }
  }, []);

  return (
    <div className="bg-pink-200 bg-cover h-scroll">
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route element={<PrivateRoute />}>
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/add-new-project" element={<AddProject />} />
            <Route path="/project-detail/:id" element={<ProjectDetail />} />
            <Route path="/project-detail/:id/tasks" element={<ProjectTasks />} />
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/message-details/:id" element={<MessageDetails />} />
            <Route path="/users" element={<Users />} />
            <Route path="/calendar" element={<EventCalendar />} />
            <Route path="add-user" element={<AddNewUser />} />
          </Route>
        </Route>
        <Route path="/packages" element={<Packages />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
