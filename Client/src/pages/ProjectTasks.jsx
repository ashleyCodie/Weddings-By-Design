import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  projectGetOne,
  projectTaskCreate,
  projectTaskUpdate,
  projectTaskDelete,
} from "../redux/projectSlice";
import TaskDeleteModal from "../components/TaskDeleteModal";
import GradientText from "../components/GradientText";

const TaskModal = ({ setShowTaskModal, handleAddTask }) => {
  const [addTaskForm, setAddTaskForm] = useState({
    taskIndex: 0,
    taskName: "",
    taskDescription: "",
    startDate: "",
    endDate: "",
    status: "",
    roles: [],
    users: [{ email: "" }],
  });
  const { project } = useSelector((state) => state.project);
  const { users } = useSelector((state) => state.user);


  return (
    <div
      id="default-modal"
      tabIndex="-1"
      aria-hidden="true"
      className="overflow-y-auto overflow-x-hidden fixed  z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full rounded-lg"
      style={{ marginLeft: "35%" }}
    >
      <div className="relative  p-4  w-full max-w-2xl max-h-full">
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

            <h3 className="brush text-3xl font-semibold text-pink-200 dark:text-pink-200">
              Add A New Task To This Project.
            </h3>
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
            <button
              onClick={() => setShowTaskModal(false)}
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
          <div className="brush text-2xl ml-10 text-pink-200  me-8">
            <div className="grid grid-cols-1 gap-4 p-10 ">
              <div className="border border-zinc-500 rounded-lg border-3 p-8">
                <div>
                  <div>
                    <label htmlFor={"taskName"} className="underline ">
                      Task Name:
                    </label>
                  </div>
                  <input
                    value={addTaskForm.taskName}
                    onChange={(e) =>
                      setAddTaskForm({
                        ...addTaskForm,
                        taskName: e.target.value,
                      })
                    }
                    id="taskName"
                    type="text"
                    className="pl-2 bg-white text-zinc-500 border border-zinc-500 rounded-lg w-full"
                  />
                </div>
                <div>
                  <div>
                    <label htmlFor={"taskDescription"} className="underline">
                      Description:
                    </label>
                  </div>
                  <input
                    value={addTaskForm.taskDescription}
                    onChange={(e) =>
                      setAddTaskForm({
                        ...addTaskForm,
                        taskDescription: e.target.value,
                      })
                    }
                    type="text"
                    id="taskDescription"
                    className="pl-2 text-zinc-500 text-wrap bg-white border border-zinc-500 rounded-lg w-full"
                  />
                </div>

                <div>
                  <div>
                    <label htmlFor={"startDate"} className="underline">
                      Start Date:
                    </label>
                  </div>
                  <input
                    value={addTaskForm.startDate}
                    onChange={(e) =>
                      setAddTaskForm({
                        ...addTaskForm,
                        startDate: e.target.value,
                      })
                    }
                    type="date"
                    id="startDate"
                    className=" pl-2 bg-white border border-zinc-500 rounded-lg w-full text-zinc-500"
                  />
                </div>

                <div className="">
                  <div>
                    <label htmlFor={"endDate"} className="underline">
                      End Date:
                    </label>
                  </div>
                  <input
                    value={addTaskForm.endDate}
                    onChange={(e) =>
                      setAddTaskForm({
                        ...addTaskForm,
                        endDate: e.target.value,
                      })
                    }
                    type="date"
                    id="endDate"
                    className="pl-2 bg-white border border-zinc-500 rounded-lg w-full text-zinc-500"
                  />
                </div>

                <div>
                  <div>
                    <label htmlFor={"status"} className="underline">
                      Status:
                    </label>
                  </div>
                  <select
                    value={addTaskForm.status}
                    onChange={(e) =>
                      setAddTaskForm({ ...addTaskForm, status: e.target.value })
                    }
                    id="status"
                    className="brush bg-white pl-2 rounded-lg border border-zinc-500 w-full text-zinc-500 "
                  >
                    <option value="Select a Status">Select a Status</option>
                    <option value="In Process">In Process</option>
                    <option value="On Hold">On Hold</option>
                    <option value="Awaiting Approval">Awaiting Approval</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
                <div>
                  <div>
                    <label htmlFor={"roles"} className="underline">
                      Role
                    </label>
                  </div>
                  <input
                    value={addTaskForm.roles}
                    onChange={(e) =>
                      setAddTaskForm({ ...addTaskForm, roles: e.target.value })
                    }
                    type="text"
                    id="roles"
                    className="pl-2 bg-white text-zinc-500 border border-zinc-500 rounded-lg w-full"
                  
                  />
                </div>
                <div>
                  <div>
                    <label htmlFor={"email"} className="underline">
                      Contact
                    </label>
                  </div>
                  <input
                    type="text"
                    id="email"
                    className="pl-2 bg-white text-zinc-500 border border-zinc-500 rounded-lg w-full"
                    value={addTaskForm.users.email}
                    onChange={(e) =>
                      setAddTaskForm({
                        ...addTaskForm.users,
                        email: e.target.value,
                      })
                    }
                  />
                </div>
                <div></div>
              </div>
            </div>
          </div>

          {/* <!-- Modal footer --> */}
          <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              onClick={() => handleAddTask(addTaskForm)}
              data-modal-hide="default-modal"
              type="button"
              className="text-zinc-500 brush text-2xl bg-pink-200 font-semibold hover:bg-pink-400 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg  px-5 py-2.5 text-center dark:bg-pink-200 dark:hover:bg-pink-400 dark:focus:ring-pink-600"
            >
              Add Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectTasks = () => {
  const [taskForm, setTaskForm] = useState([
    {
      taskIndex: 0,
      taskName: "",
      taskDescription: "",
      startDate: "",
      endDate: "",
      status: "",
      roles: [],
      users: [{ email: "" }],
    },
  ]);
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState({
    taskIndex: 0,
    taskName: "",
    taskDescription: "",
    startDate: "",
    endDate: "",
    status: "",
    roles: [],
    users: [],
  });

  const { loading, project } = useSelector((state) => state.project);

  const location = useLocation();
  const dispatch = useDispatch();

  let projectId = location.pathname.split("/")[2];

  useEffect(() => {
    console.log("ProjectTasks useEffect location", location, projectId);
    dispatch(projectGetOne(projectId));
  }, []);

  useEffect(() => {
    console.log(project.tasks);
    setTaskForm(project.tasks);
  }, [project]);

  const handleAddTask = (task) => {
    console.log("handleAddTask");
    dispatch(projectTaskCreate({ projectId, task }));
    setShowTaskModal(false);
    setTaskForm([ ...taskForm, task ])
  };

  const handleUpdate = (task) => {
    console.log("projectId :", projectId, "task:", task);
    dispatch(projectTaskUpdate({ projectId, task }));
  };

  const handleDelete = (task) => {
    console.log("handleDelete");
    dispatch(projectTaskDelete({ projectId, taskId: task._id }));
    setTaskForm(taskForm.filter((t) => t._id !== task._id));
    setShowDeleteModal(false);
  };

  return (
    <div>
      <GradientText
        colors={["#f8fafc", "#71717a", "#1f2937", "#71717a", "#f8fafc"]}
        animationSpeed={3}
        showBorder={false}
        className="custom-class  brush ml-44 pl-60 mt-10 text-4xl font-extrabold text-center"
      >
        {project.weddingName}: Wedding Tasks
      </GradientText>
      <button
        onClick={() => setShowTaskModal(true)}
        type="button"
        className="text-pink-200 brush bg-zinc-500 ml-80  focus:ring-4 focus:outline-none focus:ring-zinc-300 font-medium rounded-lg text-2xl w-full sm:w-auto px-5 py-2.5 text-center dark:bg-zinc-500 hover:bg-pink-400 hover:text-zinc-800 dark:focus:ring-zinc-800"
      >
        Add Task
      </button>
      <div className="brush text-2xl ml-68 mt-10 text-zinc-500 me-8">
        <div className="grid grid-cols-1 gap-4 p-10 ">
          {taskForm.map((task, index) => (
            <div className="border-zinc-500 rounded-lg border-3 p-8">
              <div key={task._id}>
                <div>
                  <label
                    htmlFor={`taskName-${task._id}`}
                    className="underline "
                  >
                    Task Name:
                  </label>
                </div>
                <input
                  value={task.taskName}
                  onChange={(e) =>
                    setTaskForm(
                      taskForm.map((t) =>
                        t._id === task._id
                          ? {
                              ...t,
                              taskIndex: index,
                              submitEnabled: true,
                              taskName: e.target.value,
                            }
                          : t
                      )
                    )
                  }
                  id="taskName"
                  type="text"
                  className="pl-2 bg-white border border-zinc-500 rounded-lg w-full"
                />
              </div>
              <div>
                <div>
                  <label
                    htmlFor={`taskDescription-${task._id}`}
                    className="underline"
                  >
                    Description:
                  </label>
                </div>
                <input
                  value={task.taskDescription}
                  onChange={(e) =>
                    setTaskForm(
                      taskForm.map((t) =>
                        t._id === task._id
                          ? {
                              ...t,
                              submitEnabled: true,
                              taskDescription: e.target.value,
                            }
                          : t
                      )
                    )
                  }
                  type="text"
                  id="taskDescription"
                  className="pl-2  text-wrap bg-white border border-zinc-500 rounded-lg w-full"
                />
              </div>

              <div>
                <div>
                  <label
                    htmlFor={`startDate-${task._id}`}
                    className="underline"
                  >
                    Start Date:
                  </label>
                </div>
                <input
                  value={task.startDate}
                  onChange={(e) =>
                    setTaskForm(
                      taskForm.map((t) =>
                        t._id === task._id
                          ? {
                              ...t,
                              submitEnabled: true,
                              startDate: e.target.value,
                            }
                          : t
                      )
                    )
                  }
                  type="date"
                  id="startDate"
                  className=" pl-2 bg-white border border-zinc-500 rounded-lg w-full"
                />
              </div>

              <div className="">
                <div>
                  <label htmlFor={`endDate-${task._id}`} className="underline">
                    End Date:
                  </label>
                </div>
                <input
                  value={task.endDate}
                  onChange={(e) =>
                    setTaskForm(
                      taskForm.map((t) =>
                        t._id === task._id
                          ? {
                              ...t,
                              submitEnabled: true,
                              endDate: e.target.value,
                            }
                          : t
                      )
                    )
                  }
                  type="date"
                  id="endDate"
                  className="pl-2 bg-white border border-zinc-500 rounded-lg w-full"
                />
              </div>

              <div>
                <div>
                  <label htmlFor={`status-${task._id}`} className="underline">
                    Status:
                  </label>
                </div>
                <select
                  value={task.status}
                  onChange={(e) =>
                    setTaskForm(
                      taskForm.map((t) =>
                        t._id === task._id
                          ? {
                              ...t,
                              submitEnabled: true,
                              status: e.target.value,
                            }
                          : t
                      )
                    )
                  }
                  id="status"
                  className="brush bg-white pl-2 rounded-lg border border-zinc-500 w-full"
                >
                  <option value="Select a Status">Select a Status</option>
                  <option value="In Process">In Process</option>
                  <option value="On Hold">On Hold</option>
                  <option value="Awaiting Approval">Awaiting Approval</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
              <div>
                <div>
                  <label htmlFor={`roles-${task._id}`} className="underline">
                    Role
                  </label>
                </div>
                <input
                  value={task.roles}
                  onChange={(e) =>
                    setTaskForm(
                      taskForm.map((t) =>
                        t._id === task._id ? { ...t, roles: e.target.value } : t
                      )
                    )
                  }
                  type="text"
                  id="roles"
                  className="pl-2 bg-white border border-zinc-500 rounded-lg w-full"
                  disabled={true}
                />
              </div>
              <div>
                <div>
                  <label htmlFor={`email-${task._id}`} className="underline">
                    Contact
                  </label>
                </div>
                <input
                  type="text"
                  id="email"
                  className="pl-2 bg-white border border-zinc-500 rounded-lg w-full"
                  //   value={task.users.map((user) => user.email)}
                  value={task.users[0].email}
                  disabled={true}
                />
              </div>
              <div>
                <button
                  onClick={() => handleUpdate(task)}
                  disabled={!task.submitEnabled}
                  type="button"
                  className="mt-8 text-white brush bg-zinc-500 hover:bg-zinc-800 focus:ring-4 focus:outline-none focus:ring-zinc-300 font-medium rounded-lg text-md w-full sm:w-auto px-3 py-1.5 text-center dark:bg-zinc-500 dark:hover:bg-zinc-800 dark:focus:ring-zinc-800 disabled:opacity-50"
                >
                  Update
                </button>
                <button
                  onClick={() => {
                    setTaskToDelete(task);
                    setShowDeleteModal(true);
                  }}
                  type="button"
                  className="mt-8 ml-2  text-white brush bg-zinc-500 hover:bg-zinc-800 focus:ring-4 focus:outline-none focus:ring-zinc-300 font-medium rounded-lg text-md w-full sm:w-auto px-3 py-1.5 text-center dark:bg-zinc-500 dark:hover:bg-zinc-800 dark:focus:ring-zinc-800"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showDeleteModal && (
        <TaskDeleteModal
          setShowDeleteModal={setShowDeleteModal}
          handleDelete={handleDelete}
          taskToDelete={taskToDelete}
        />
      )}
      {showTaskModal && <TaskModal setShowTaskModal={setShowTaskModal} handleAddTask={handleAddTask}/>}
    </div>
  );
};

export default ProjectTasks;