
import projectModel from "../../schemas/projectModel.js"
import builderModel from "../../schemas/builderModel.js"
import userModel from "../../schemas/userModel.js"

const projectCreate = async (req, res) => {
    const { weddingName, coverPic,  packageSelected, startDate, weddingDate, weddingTime, theme, colors, weddingLocation, bride, groom, status, roles, tasks, users } = req.body
    console.log(weddingName, coverPic,  packageSelected, startDate, weddingDate, weddingTime, theme, colors, weddingLocation, bride, groom, status, roles, tasks, users )

    if(
        (!weddingName || weddingName == "") ||
        (!startDate || startDate == "") ||
        (!weddingDate || weddingDate == "") ||
        (!bride)  ||
        (!groom)  ||
        (!roles || roles.length === 0)

    ) {
      res.status(500).json({ "message": "Project Information Not Valid" })  
    }
    else {
        const packageTemplate = await builderModel.find({ packageSelected })
        // console.log("packageTemplate", packageTemplate)
        const template = packageTemplate[0]
        // console.log("template.roles", template.roles)
        const projectUsers = await  userModel.find({ roles: { "$in": template.roles} })
        // console.log("projectUsers", projectUsers)
        const tasks = []
        template.tasks.forEach(task => {
            // console.log("projectUser.find", projectUsers.find(user=> user.roles.includes(task.roles[0])))
        const taskUser = projectUsers.find(user => user.roles.includes(task.roles[0]))
        // console.log("tasks", tasks)
        const user = { firstName: taskUser.firstName, lastName: taskUser.lastName, email: taskUser.email}
        // console.log("user", user)
        tasks.push( { taskName: task.taskName, taskDescription: task.taskDescription, startDate: task.startDate, endDate: task.endDate, status: "", roles: task.roles, users: [ user ]})
    })
    console.log("tasks", tasks)
        const newProject = await projectModel.create({ weddingName, coverPic,  packageSelected, startDate, weddingDate, weddingTime, theme, colors, weddingLocation, bride, groom, status, roles: template.roles, tasks, users: [] })
        // console.log("newProject", newProject)
        res.status(200).json({ "success": true, "message": "Project created Successfully" })
    }
}

export default projectCreate