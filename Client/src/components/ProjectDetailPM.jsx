import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { builderList } from "../redux/builderSlice";
import { userList } from "../redux/userSlice";
import { projectGetOne } from "../redux/projectSlice";
import GradientText from "../components/GradientText";


const Modal = ({ setShowModal }) => {
  const navigate = useNavigate();

  return (
    <div
      id="default-modal"
      tabIndex="-1"
      aria-hidden="true"
      className="overflow-y-auto overflow-x-hidden fixed  z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      style={{ marginLeft: "45%" }}
    >
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        {/* <!-- Modal content --> */}
        <div className="relative bg-zinc-500 rounded-lg shadow dark:bg-zinc-500">
          {/* <!-- Modal header --> */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <svg
              className="w-6 h-6 text-pink-200 dark:text-pink-200"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z" />
            </svg>

            <h3 className="text-xl font-semibold text-pink-200 dark:text-pink-200">
              Success! Project Has been Updated.
            </h3>
            <button
              onClick={() => setShowModal(false)}
              type="button"
              className="text-pink-200 bg-transparent hover:bg-pink-400 hover:text-zinc-500 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-pink-400 dark:hover:text-zinc-500"
              data-modal-hide="default-modal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* <!-- Modal body --> */}
          <div className="p-4 md:p-5 space-y-4">
            <p className="text-base leading-relaxed text-pink-200 dark:text-pink-200">
              You have successfully updated your project.
            </p>
          </div>
          {/* <!-- Modal footer --> */}
          <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              onClick={() => navigate("/dashboard")}
              data-modal-hide="default-modal"
              type="button"
              className="text-zinc-500 bg-pink-200 font-semibold hover:bg-pink-400 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg  px-5 py-2.5 text-center dark:bg-pink-200 dark:hover:bg-pink-400 dark:focus:ring-pink-600"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectDetailPM = () => { 
  const [showModal, setShowModal] = useState(false);
  const [projectForm, setProjectForm] = useState({
    weddingName: "",
    startDate: "",
    weddingDate: "",
    weddingTime: "",
    theme: "",
    colors: "",
    weddingLocation: "",
    status: "Idea/Concepts",
    bride: { bridesFullName: "", bridesNumber: "", bridesEmail: "" },
    groom: { groomsFullName: "", groomsNumber: "", groomsEmail: "" },
    packageSelected: "",
    roles: [],
    tasks: [],
    users: [{ firstName: "", lastName: "", email: "" }],
  });
  // const [submitDisabled, setSubmitDisabled] = useState(false);

  const { loading, project } = useSelector((state) => state.project);
  const { builders } = useSelector((state) => state.builder);
  const { users } = useSelector((state) => state.user);
 

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    dispatch(builderList());
    dispatch(userList());
  }, []);

  useEffect(() => {
    if (project.projectName !== "") {
        setProjectForm(project)
    }
  }, [project])
  
//   useEffect(() => {
//     console.log("users", users);
//   }, [users]);

//   useEffect(() => {
//     console.log("projectForm", projectForm);
//   }, [projectForm]);

  useEffect(() => {
    let projectId = location.pathname.split("/")[2];
    console.log("ProjectDetailPM useEffect location", location, projectId)
    dispatch(projectGetOne(projectId));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    setShowModal(true);
  };

  return (
    <>
      <div>
        <button
          onClick={() => navigate(`/project-detail/${project.id}/tasks`)}
          type="button"
          className="text-white brush bg-zinc-500 ml-80 hover:bg-zinc-800 focus:ring-4 focus:outline-none focus:ring-zinc-300 font-medium rounded-lg text-2xl w-full sm:w-auto px-5 py-2.5 text-center dark:bg-zinc-500 dark:hover:bg-zinc-800 dark:focus:ring-zinc-800"
        >
          View Tasks
        </button>

       
      </div>

      <div>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-6 pb-10 md:grid-cols-3 ps-20 pe-20 mt-10 ml-60">
            <div>
              <label
                htmlFor="weddingName"
                className="block brush mb-2 text-2xl font-medium text-zinc-500 dark:text-zinc-500"
              >
                {" "}
                Wedding Name
              </label>
              <input
                value={projectForm.weddingName}
                onChange={(e) =>
                  setProjectForm({
                    ...projectForm,
                    weddingName: e.target.value,
                  })
                }
                type="text"
                id="weddingName"
                className="bg-white border border-gray-300 text-zinc-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-zinc-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                
                disabled={true}
              />
            </div>
            <div>
              <label
                htmlFor="startDate"
                className="block brush mb-2 text-2xl font-medium text-zinc-500 dark:text-zinc-500"
              >
                Start Date
              </label>
              <input
                value={projectForm.startDate.split("T")[0]}
                // value={new Date(projectForm.startDate).toLocaleString("en-US", {year: "numeric", month: "2-digit", day: "2-digit"})}
                onChange={(e) =>
                  setProjectForm({ ...projectForm, startDate: e.target.value })
                }
                type="date"
                id="startDate"
                className="bg-white border border-gray-300 text-zinc-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-zinc-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="status"
                className="block brush mb-2 text-2xl font-medium text-zinc-500 dark:text-zinc-500"
              >
                Status
              </label>
              <select
                value={projectForm.status}
                onChange={(e) =>
                  setProjectForm({ ...projectForm, status: e.target.value })
                }
                id="status"
                className="bg-white border border-gray-300 text-zinc-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-zinc-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              >
                <option value="Idea/Concepts">Idea/Concepts</option>
                <option value="Budgeting">Budgeting</option>
                <option value="Vendor Selection/Booking">
                  Vendor Selection/Booking
                </option>
                <option value="Invitations">Invitations</option>
                <option value="Menu Planning">Menu Planning</option>
                <option value="Decor/Floral Arangements">
                  Decor/Floral Arangements
                </option>
                <option value="Rehearsal">Rehearsal</option>
                <option value="Final Preperations">Final Preperations</option>
                <option value="Wedding Day">Wedding Day</option>
              </select>
            </div>
          </div>
          <div className="grid gap-6 pb-10 md:grid-cols-2 ps-20 pe-20  ml-60">
            <div>
              <label
                htmlFor="weddingDate"
                className="block brush mb-2 text-2xl font-medium text-zinc-500 dark:text-zinc-500"
              >
                Wedding Date
              </label>
              <input
                value={projectForm.weddingDate.split("T")[0]}
                onChange={(e) =>
                  setProjectForm({
                    ...projectForm,
                    weddingDate: e.target.value,
                  })
                }
                type="date"
                id="weddingDate"
                className="bg-white border border-gray-300 text-zinc-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-zinc-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="weddingTime"
                className="block brush mb-2 text-2xl font-medium text-zinc-500 dark:text-zinc-500"
              >
                Wedding Time
              </label>
              <input
                value={projectForm.weddingTime}
                onChange={(e) =>
                  setProjectForm({
                    ...projectForm,
                    weddingTime: e.target.value,
                  })
                }
                type="time"
                id="weddingTime"
                className="bg-white border border-gray-300 text-zinc-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-zinc-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="colors"
                className="block brush mb-2 text-2xl font-medium text-zinc-500 dark:text-zinc-500"
              >
                Colors
              </label>
              <input
                value={projectForm.colors}
                onChange={(e) =>
                  setProjectForm({ ...projectForm, colors: e.target.value })
                }
                type="text"
                id="colors"
                className="bg-white border border-gray-300 text-zinc-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-zinc-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="theme"
                className="block brush mb-2 text-2xl font-medium text-zinc-500 dark:text-zinc-500"
              >
                Theme
              </label>
              <input
                value={projectForm.theme}
                onChange={(e) =>
                  setProjectForm({ ...projectForm, theme: e.target.value })
                }
                type="text"
                id="theme"
                className="bg-white border border-gray-300 text-zinc-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-zinc-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
          <div className="mb-6 ps-20 pe-20 ml-60">
            <label
              htmlFor="weddingLocation"
              className="block brush mb-2 text-2xl font-medium text-zinc-500 dark:text-zinc-500"
            >
              Wedding Location
            </label>
            <input
              value={projectForm.weddingLocation}
              onChange={(e) =>
                setProjectForm({
                  ...projectForm,
                  weddingLocation: e.target.value,
                })
              }
              type="text"
              id="weddingLocation"
              className="bg-white border border-gray-300 text-zinc-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-zinc-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              
            />
          </div>
          <GradientText
            colors={["#f8fafc", "#71717a", "#1f2937", "#71717a", "#f8fafc"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class  brush ml-44 pl-60 mt-10 text-4xl font-extrabold text-center"
          >
            Bride-To-Be
          </GradientText>
          {/* <h4 className="block brush ml-80 mb-2 text-3xl underline font-medium text-zinc-500 dark:text-zinc-500">Bride-To-Be:</h4> */}
          <div className="grid gap-6 pb-10 md:grid-cols-3 ps-20 pe-20  ml-60">
            <div>
              <label
                htmlFor="bridesFullName"
                className="block brush mb-2 text-2xl font-medium text-zinc-500 dark:text-zinc-500"
              >
                {" "}
                Full Name
              </label>
              <input
                value={projectForm.bride.bridesFullName}
                onChange={(e) =>
                  setProjectForm({
                    ...projectForm,
                    bride: {
                      ...projectForm.bride,
                      bridesFullName: e.target.value,
                    },
                  })
                }
                type="text"
                id="bridesFullName"
                className="bg-white border border-gray-300 text-zinc-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-zinc-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                disabled={true}
              />
            </div>
            <div>
              <label
                htmlFor="bridesNumber"
                className="block brush mb-2 text-2xl font-medium text-zinc-500 dark:text-zinc-500"
              >
                {" "}
                Phone Number
              </label>
              <input
                value={projectForm.bride.bridesNumber}
                onChange={(e) =>
                  setProjectForm({
                    ...projectForm,
                    bride: {
                      ...projectForm.bride,
                      bridesNumber: e.target.value,
                    },
                  })
                }
                type="tel"
                id="bridesNumber"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                className="bg-white border border-gray-300 text-zinc-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-zinc-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="bridesEmail"
                className="block brush mb-2 text-2xl font-medium text-zinc-500 dark:text-zinc-500"
              >
                {" "}
                Email{" "}
              </label>
              <input
                value={projectForm.bride.bridesEmail}
                onChange={(e) =>
                  setProjectForm({
                    ...projectForm,
                    bride: {
                      ...projectForm.bride,
                      bridesEmail: e.target.value,
                    },
                  })
                }
                type="email"
                id="bridesEmail"
                className="bg-white border border-gray-300 text-zinc-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-zinc-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
               
              />
            </div>
          </div>
          <GradientText
            colors={["#f8fafc", "#71717a", "#1f2937", "#71717a", "#f8fafc"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class  brush ml-44 pl-60 mt-10 text-4xl font-extrabold text-center"
          >
            Groom-To-Be
          </GradientText>
          {/* <h4 className="block brush ml-80 mb-2 text-3xl underline font-medium text-zinc-500 dark:text-zinc-500">Groom-To-Be:</h4> */}
          <div className="grid gap-6 pb-10 md:grid-cols-3 ps-20 pe-20  ml-60">
            <div>
              <label
                htmlFor="groomsFullName"
                className="block brush mb-2 text-2xl font-medium text-zinc-500 dark:text-zinc-500"
              >
                {" "}
                Full Name
              </label>
              <input
                value={projectForm.groom.groomsFullName}
                onChange={(e) =>
                  setProjectForm({
                    ...projectForm,
                    groom: {
                      ...projectForm.groom,
                      groomsFullName: e.target.value,
                    },
                  })
                }
                type="text"
                id="groomsFullName"
                className="bg-white border border-gray-300 text-zinc-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-zinc-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                disabled={true}
              />
            </div>
            <div>
              <label
                htmlFor="groomsNumber"
                className="block brush mb-2 text-2xl font-medium text-zinc-500 dark:text-zinc-500"
              >
                {" "}
                Phone Number
              </label>
              <input
                value={projectForm.groom.groomsNumber}
                onChange={(e) =>
                  setProjectForm({
                    ...projectForm,
                    groom: {
                      ...projectForm.groom,
                      groomsNumber: e.target.value,
                    },
                  })
                }
                type="tel"
                id="groomsNumber"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                className="bg-white border border-gray-300 text-zinc-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-zinc-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="groomsEmail"
                className="block brush mb-2 text-2xl font-medium text-zinc-500 dark:text-zinc-500"
              >
                {" "}
                Email{" "}
              </label>
              <input
                value={projectForm.groom.groomsEmail}
                onChange={(e) =>
                  setProjectForm({
                    ...projectForm,
                    groom: {
                      ...projectForm.groom,
                      groomsEmail: e.target.value,
                    },
                  })
                }
                type="email"
                id="groomsEmail"
                className="bg-white border border-gray-300 text-zinc-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-zinc-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
          <div className="grid gap-6 pb-10 md:grid-cols-3 ps-20 pe-20  ml-60">
            <div>
              <label
                htmlFor="packageSelected_multiple"
                className="block brush mb-2 mt-30 ml-80 text-2xl font-medium text-zinc-500 dark:text-zinc-500"
              >
                Select A Package
              </label>
              <select
                value={projectForm.packageSelected}
                onChange={(e) =>
                  setProjectForm({
                    ...projectForm,
                    packageSelected: e.target.value,
                  })
                }
                id="packageSelected"
                className="bg-white ml-80 mb-4  border border-gray-300 text-zinc-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-zinc-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>Select a Package</option>
                {builders.map((type, index) => (
                  <option key={index} value={type.packageSelected}>
                    {type.packageSelected}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="roles_multiple"
                className="block brush mb-2 ml-80 text-2xl font-medium text-zinc-500 dark:text-zinc-500"
              >
                Select Project Roles
              </label>
              <select
                value={projectForm.roles}
                onChange={(e) =>
                  setProjectForm({
                    ...projectForm,
                    roles: [...e.target.selectedOptions].map((o) => o.value),
                  })
                }
                multiple
                id="roles"
                className="bg-white ml-80 mb-4 h-68 border border-gray-300 text-zinc-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-zinc-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                {/* {!projectForm.packageSelected ? <option defaultValue>Select A Package</option> : <option defaultValue>Select Required Roles:</option>} */}
                {projectForm.packageSelected ? (
                  builders
                    .find(
                      (builder) =>
                        builder.packageSelected === projectForm.packageSelected
                    )
                    .roles.map((role, index) => (
                      <option key={index} value={role}>
                        {role} (
                        {
                          users.find((user) => user.roles.includes(role))
                            ?.firstName
                        }{" "}
                        {
                          users.find((user) => user.roles.includes(role))
                            ?.lastName
                        }
                        )
                      </option>
                    ))
                ) : (
                  <option defaultValue>Select A Package</option>
                )}
              </select>
            </div>
          </div>
          <GradientText
            colors={["#f8fafc", "#71717a", "#1f2937", "#71717a", "#f8fafc"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class  brush ml-44 pl-60 mt-10 text-4xl font-extrabold text-center"
          >
            Project Manager
          </GradientText>
          <div className="grid gap-6 pb-10 md:grid-cols-3 ps-20 pe-20  ml-60">
            <div>
              <label className="block brush mb-2 text-2xl font-medium text-zinc-500 dark:text-zinc-500">
                First Name
              </label>
              <input
                value={projectForm.users.firstName}
                onChange={(e) =>
                  setProjectForm({
                    ...projectForm,
                    users: { ...projectForm.users, firstName: e.target.value },
                  })
                }
                type="firstName"
                id="firstName"
                className="bg-white border border-gray-300 text-zinc-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-zinc-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                
              />
            </div>
            <div>
              <label className="block brush mb-2 text-2xl font-medium text-zinc-500 dark:text-zinc-500">
                Last Name
              </label>
              <input
                value={projectForm.users.lastName}
                onChange={(e) =>
                  setProjectForm({
                    ...projectForm,
                    users: { ...projectForm.users, lastName: e.target.value },
                  })
                }
                type="lastName"
                id="lastName"
                className="bg-white border border-gray-300 text-zinc-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-zinc-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
               
              />
            </div>
            <div>
              <label className="block brush mb-2 text-2xl font-medium text-zinc-500 dark:text-zinc-500">
                Email
              </label>
              <input
                value={projectForm.users.email}
                onChange={(e) =>
                  setProjectForm({
                    ...projectForm,
                    users: { ...projectForm.users, email: e.target.value },
                  })
                }
                type="email"
                id="email"
                className="bg-white border border-gray-300 text-zinc-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-zinc-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                
              />
            </div>
          </div>
          <button
            type="submit"
            className="text-white brush bg-zinc-500 ml-80 hover:bg-zinc-800 focus:ring-4 focus:outline-none focus:ring-zinc-300 font-medium rounded-lg text-2xl w-full sm:w-auto px-5 py-2.5 text-center dark:bg-zinc-500 dark:hover:bg-zinc-800 dark:focus:ring-zinc-800"
          >
            Update Project
          </button>
        </form>
        {showModal && <Modal setShowModal={setShowModal} />}
      </div>
    </>
  );
};

export default ProjectDetailPM;