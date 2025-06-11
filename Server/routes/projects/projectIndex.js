import express from "express"
import projectCreate from "./projectCreate.js"
import projectGetMany from "./projectGetMany.js"
import projectGetOne from "./projectGetOne.js"
import projectUserCreate from "./projectUserCreate.js"
import projectTaskCreate from "./projectTaskCreate.js"
import projectTaskUpdate from "./projectTaskUpdate.js"
import projectTaskDelete from "./projectTaskDelete.js"

const projectIndex = express.Router()

projectIndex.post("/addProject", projectCreate)
projectIndex.get("/:email", projectGetMany)
projectIndex.get("/detail/:projectId", projectGetOne)
projectIndex.post("/:projectId/tasks", projectTaskCreate)
projectIndex.put("/:projectId/tasks", projectTaskUpdate)
projectIndex.delete("/:projectId/tasks/:taskId", projectTaskDelete)


projectIndex.post("/users/:projectId", projectUserCreate)

export default projectIndex