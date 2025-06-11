import { useState, useNavigate } from "react";
import { useSelector } from "react-redux";
import ProjectDetailPM from "../components/ProjectDetailPM"
import ProjectDetailWP from "../components/ProjectDetailWP"
import GradientText from "../components/GradientText";



const ProjectDetail = () => {
 
  const { user } = useSelector((state) => state.auth);
  const { project } = useSelector((state) => state.project);

  if (user.roles.includes("Project Manager")) {
    console.log("Project Manager");
  } else {
    console.log(user.roles);
  }

  return (
    <div>
      <GradientText
        colors={["#f8fafc", "#71717a", "#1f2937", "#71717a", "#f8fafc"]}
        animationSpeed={3}
        showBorder={false}
        className="custom-class  brush ml-44 pl-60 mt-10 text-4xl font-extrabold text-center"
      >
        {project.weddingName}: Wedding Details
      </GradientText>

      {user.roles.includes("Project Manager") ? 
      (<ProjectDetailPM />)
    :
    (<ProjectDetailWP />)}
     
    </div>
  );
};

export default ProjectDetail;