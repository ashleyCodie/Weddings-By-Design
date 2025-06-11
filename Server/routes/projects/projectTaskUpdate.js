
import projectModel from "../../schemas/projectModel.js"


const projectTaskUpdate = async (req, res) => {
    const { projectId } = req.params
    const { taskIndex, taskName, taskDescription, startDate, endDate, status, roles, users } = req.body
    console.log( taskIndex, taskName, taskDescription, startDate, endDate, status, roles, users )

    if (
        (!taskName || taskName === "") ||
        (!taskDescription || taskDescription === "") 

    ) {
      res.status(500).json({ "message": "Task Information Not Valid" })  
    }
    else {
        const updateProjectTask = await projectModel.updateOne({ _id: projectId }, { "$set": { [`tasks.${taskIndex}`]: {taskName, taskDescription, startDate, endDate, status, roles, users }}})
        console.log("updateProjectTask", updateProjectTask)
        res.status(200).json({ "success": true, "message": "Task Updated Successfully" })
    }
}

export default projectTaskUpdate