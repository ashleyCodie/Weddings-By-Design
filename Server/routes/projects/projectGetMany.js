import projectModel from "../../schemas/projectModel.js"

const projectGetMany = async (req, res) => {
    const { email } = req.params
   

    if (!email || email === "") {
      res.status(500).json({ "message": "Project Information Not Valid" })  
    }
    else {
        const getProjects = await projectModel.find({ $or: [ {"users.email": email }, { "tasks.users.email": email}]})
        console.log("getProjects", getProjects)
        res.status(200).json({ "success": true, projects: getProjects  })
    }
}

export default projectGetMany