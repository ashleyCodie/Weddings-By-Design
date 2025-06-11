import projectModel from "../../schemas/projectModel.js"

const projectGetOne = async (req, res) => {
    const { projectId } = req.params
   

    if (!projectId || projectId === "") {
      res.status(500).json({ "success" : false, "message": "Project Information Not Valid" })  
    }
    else {
        const getProject = await projectModel.findOne({ _id: projectId })
        console.log("getProject", getProject)
        res.status(200).json({ "success": true, project: getProject  })
    }
}

export default projectGetOne