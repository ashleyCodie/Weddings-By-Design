import mongoose from "mongoose"

const Schema = mongoose.Schema

const userSchema = new Schema({
  firstName: {
    type: String,
    default: ""
  },
  lastName: {
    type: String,
    default: ""
  },
  email: {
    type: String,
    default: ""
  },
  username: {
    type: String,
    default: ""
  },
  password: {
    type: String,
    default: ""
  },
  roles: [ String ],
  token: {
    type: [ String ]
  },
  avatar: {
    type: String,
    default: ""
  },
  contactNumber: {
    type: String,
    default: ""
  },
  company: {
    type: String,
    default: ""
  },
})
export default userSchema