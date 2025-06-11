import { useEffect } from "react";
import { Navigate, Outlet } from "react-router"
import { useDispatch, useSelector } from "react-redux";
import { projectList } from "../redux/projectSlice"
import SideNavbar from "../components/SideNavbar"

const DashboardLayout = () => {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

    useEffect(() => {
      if (user.email !== "") {
      dispatch(projectList(user.email))
    }
    }, []);

  return (
    <>
    <SideNavbar />
    <Outlet />
    </>
  )
}

export default DashboardLayout