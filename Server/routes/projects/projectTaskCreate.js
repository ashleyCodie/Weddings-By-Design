
import projectModel from "../../schemas/projectModel.js"


const projectTaskCreate = async (req, res) => {
    const { projectId } = req.params
    const { taskIndex, taskName, taskDescription, startDate, endDate, status, roles=[], users=[]} = req.body


    if(
        (!taskName || taskName === "") ||
        (!taskDescription || taskDescription === "") 

    ) {
      res.status(500).json({ "message": "Task Information Not Valid" })  
    }
    else {
        const updateProjectTask = await projectModel.findOne({ _id: projectId })
        console.log("updateProjectTask", updateProjectTask)
        updateProjectTask.tasks.push({taskIndex, taskName, taskDescription, startDate, endDate, status, roles, users})
        updateProjectTask.save()
        res.status(200).json({ "success": true, "message": "Task Added Successfully" })
    }
}

export default projectTaskCreate