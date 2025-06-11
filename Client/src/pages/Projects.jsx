import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { projectList } from "../redux/projectSlice"
import { Link } from "react-router"
import GradientText from "../components/GradientText";

const Projects = () => {
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { projects } = useSelector((state) => state.project)
  const { users } = useSelector((state) => state.user)

  useEffect(() => {
     dispatch(projectList(user.email))
  }, [])

  useEffect(() => {
console.log("projects", projects)
  }, [projects])
  
  useEffect(() => {
console.log(users)
  }, [users])
  
  

  return (
    <div className="h-screen">
      <GradientText
        colors={["#f8fafc", "#71717a", "#1f2937", "#71717a", "#f8fafc"]}
        animationSpeed={3}
        showBorder={false}
        className="custom-class  brush ml-44 pl-60 mt-10 text-5xl font-extrabold text-center"
      >
        Projects
      </GradientText>
      <div  className="grid gap-6 pb-10 md:grid-cols-2 ps-20 pe-20 mt-20 ml-60">
        {projects.map((project, index) => 
        <Link
        key={index}
          to={`/project-detail/${project.id}`}
          className="flex flex-col items-center ml-20 bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-zinc-500 dark:bg-zinc-500 dark:hover:bg-zinc-700"
        >
          <img
            className="object-cover ml-2 w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-lg md:rounded-s-lg"
            src={
              new URL(
                `../assets/images/${project.coverPic}`,
                import.meta.url
              ).href
            }
            alt=""
          />

          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-1 text-2xl font-bold tracking-tight text-pink-300 dark:text-pink-300">
           {project.weddingName}
            </h5>
            <p className="mb-1 font-normal text-gray-700 dark:text-pink-200">
             <span className="underline">Start Date:</span> {new Date(project.startDate).toLocaleString("en-US", {year: "numeric", month: "2-digit", day: "2-digit"})}
            </p>
            <p className="mb-1 font-normal text-gray-700 dark:text-pink-200">
             <span className="underline">Wedding Planner:</span>  {project.users.find(user => user.roles.includes("Wedding Planner"))?.firstName} {project.users.find(user => user.roles.includes("Wedding Planner"))?.lastName}
            </p>
            <p className="mb-1 font-normal text-gray-700 dark:text-pink-200">
           <span className="underline">Status:</span> {project.status}
            </p>
            <p className="mb-1 font-normal text-gray-700 dark:text-pink-200">
           <span className="underline">Wedding Date:</span> {new Date(project.weddingDate).toLocaleString("en-US", {year: "numeric", month: "2-digit", day: "2-digit"})}
            </p>
            <p className="mb-1 font-normal text-gray-700 dark:text-pink-200">
           <span className="underline">Theme:</span> {project.theme} 
           </p>
           <p className="mb-1 font-normal text-gray-700 dark:text-pink-200">
           <span className="underline">Colors:</span> {project.colors}
            </p>
          </div>

          
        </Link>)}
      </div> 
    </div>
  );
};

export default Projects;