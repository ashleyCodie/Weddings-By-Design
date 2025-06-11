import express from "express"
import blogCreate from "./blogCreate.js"
import blogsGetAll from "./blogsGetAll.js"


const blogIndex = express.Router()

blogIndex.post("/", blogCreate)
blogIndex.get("/", blogsGetAll)


export default blogIndex