import "dotenv/config"
import axios from "axios"

const seedTasks = [
    {
        packageSelected: "Intimate Rendezvous",
        roles: ["Project Manager", "Wedding Planner", "Caterer", "Priest/Minister", "Venue", "Photographer" ]
    }
]

seedTasks.forEach(async (task) => {
    const newTask = await axios.post(`${process.env.SERVER_URL}/tasks`, task);
    console.log("newTask", newTask.data);
  });