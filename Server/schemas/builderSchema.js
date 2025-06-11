import mongoose from "mongoose";

const Schema = mongoose.Schema;

const builderSchema = new Schema({
  packageSelected: {
    type: String,
    default: "",
  },
  roles: [String],
  tasks: [ 
    {
    taskName: String,
    taskDescription: String,
    startDate: {
      type: Date,
      default: "",
    },
    endDate: {
      type: Date,
      default: "",
    },
    status: String,
    roles: [ String ],
    users: [
        {
        firstName: String, lastName: String, email: String
        }
      ]
    }
  ]
});
export default builderSchema;