import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { projectList } from "../redux/projectSlice";
import SideNavbar from "../components/SideNavbar";
import GradientText from "../components/GradientText";

const localizer = momentLocalizer(moment);

const EventCalendar = () => {
  const { projects } = useSelector((state) => state.project);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(" loanList user.email ", user.email);
    dispatch(projectList(user.email));
  }, [user]);

  useEffect(() => {
    console.log("projects", projects);
  }, [projects]);

  const events = projects.map((project) => {
    return {
      title: project.weddingName,
      start: project.weddingDate,
      end: project.weddingDate,
    };
  });

  return (
    <div>
      <SideNavbar />
      <GradientText
        colors={["#f8fafc", "#71717a", "#1f2937", "#71717a", "#f8fafc"]}
        animationSpeed={3}
        showBorder={false}
        className="custom-class  brush ml-44 pl-60 mt-10 text-6xl font-extrabold text-center"
      >
        Events Calendar
      </GradientText>

      <div className="ml-72 mr-10 pb-15"style={{ height: "78vh" }}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: "100%" }}
        ></Calendar>
      </div>
    </div>
  );
};

export default EventCalendar;