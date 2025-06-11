
import {  useSelector } from "react-redux";
import DashboardPM from "../components/DashboardPM";
import DashboardWP from "../components/DashboardWP";



const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);
  console.log("user", user)

  
  if (user.roles.includes("Project Manager")) {
    console.log("Project Manager");
  }

  return (
    <>
      {user.roles.includes("Project Manager") ?
       (<DashboardPM />)
       :
       (<DashboardWP />)
      } 
      
     
    </>
  );
};

export default Dashboard;