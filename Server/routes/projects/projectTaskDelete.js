
import projectModel from "../../schemas/projectModel.js"


const projectTaskDelete = async (req, res) => {
    const { projectId, taskId } = req.params
    console.log(projectId, taskId)

    if(
        (!projectId || projectId === "") ||
        (!taskId || taskId === "") 

    ) {
      res.status(500).json({ "message": "Task Information Not Valid" })  
    }
    else {
        const deleteProjectTask = await projectModel.updateOne({ _id: projectId }, { $pull: { tasks: { _id: taskId} } } )
        console.log("deleteProjectTask", deleteProjectTask)
        res.status(200).json({ "success": true, "message": "Task Deleted Successfully" })
    }
}

export default projectTaskDelete