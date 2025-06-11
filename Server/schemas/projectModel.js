import mongoose from "mongoose"
import projectSchema from "./projectSchema.js"

projectSchema.set("toJSON", {
  transform: (doc, ret, options) => {
    ret.id = ret._id
    delete ret._id
    delete ret.__v
    return ret
  }
})

const projectModel = mongoose.model("Project", projectSchema)

export default projectModel