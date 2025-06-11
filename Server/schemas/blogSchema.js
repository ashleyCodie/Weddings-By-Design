import mongoose from "mongoose"


const Schema = mongoose.Schema

const blogSchema = new Schema({
    blogAuthor: {
        type: String,
        default: ""
      },
    blogBody: {
        type: String,
        default: ""
      },
    blogDate: {
      type: Date,
      default: ""
    },
    
  })

  export default blogSchema