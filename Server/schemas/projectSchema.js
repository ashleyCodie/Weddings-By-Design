import mongoose from "mongoose"

const Schema = mongoose.Schema

const projectSchema = new Schema({
  weddingName: {
    type: String,
    default: ""
  }, 
  packageSelected: {
    type: String,
    default: ""
  }, 
  coverPic: {
    type: String,
    default: ""
  },
  startDate: {
    type: Date,
    default: null
  },
  weddingDate: {
    type: Date,
    default: null
  },
  weddingTime: {
    type: String,
    default: ""
  },
  theme: {
    type: String,
    default: ""
  },
  colors: {
    type: String,
    default: ""
  },
  weddingLocation: {
    type: String,
    default: ""
  },
  bride: {
    bridesFullName: String,
    bridesNumber: String,
    bridesEmail: String
  },
  groom: {
    groomsFullName: String,
    groomsNumber: String,
    groomsEmail: String
  },
  status: String,
  roles: [ String ],
  tasks: [ 
    {
    taskName: String,
    taskDescription: String,
    startDate: Date,
    endDate: Date,
    status: String,
    roles: [ String ],
    users: [
        {
        firstName: String, lastName: String, email: String, roles: [ String ]
        }
      ]
    } 
   ],
   users: [
    {
        firstName: String, lastName: String, email: String, roles: [ String ]
    }
  ],
})
export default projectSchema