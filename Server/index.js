import "dotenv/config"
import cors from "cors"
import express from "express"
import mongoose from "mongoose"
import userIndex from "./routes/users/userIndex.js"
import projectIndex from "./routes/projects/projectIndex.js"
import builderIndex from "./routes/builders/builderIndex.js"
import messageIndex from "./routes/messages/messageIndex.js"
import blogIndex from "./routes/blogs/blogIndex.js"

const app = express()
app.use(express.json())
app.use(cors())
const port = 8000

app.get("/", (req, res) =>{
    res.send("Hello World")
}) 

app.use("/users", userIndex)
app.use("/projects", projectIndex)
app.use("/builders", builderIndex)
app.use("/messages", messageIndex)
app.use("/blogs", blogIndex)

app.all("*", (req, res) => {
    res.status(404).json({
        success: false,
        data: "404"
    })
})

try{
const mongoURL =  process.env.MONGODB_URL || ""
await mongoose.connect(mongoURL)
console.log(`Connected to database ${mongoURL}`)
   
app.listen(port, () => {
console.log(`Weddings By Design App is listening on ${port}`)
    })
}
catch(err) {
    console.log(err)
}