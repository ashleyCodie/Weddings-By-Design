import mongoose from "mongoose"
import blogSchema from "./blogSchema.js"

blogSchema.set("toJSON", {
  transform: (doc, ret, options) => {
    ret.id = ret._id
    delete ret._id
    delete ret.__v
    return ret
  }
})

const blogModel = mongoose.model("Blogs", blogSchema)

export default blogModel