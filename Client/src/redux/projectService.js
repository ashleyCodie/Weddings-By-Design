import axios from "axios"

const projectService = {
    addProject: async (project) => {
        return await axios.post(
            `${import.meta.env.VITE_NODE_SERVER_URL}/projects/addProject`,
             project 
        )
    },
    projectList: async (email) => {
        return await axios.get(
            `${import.meta.env.VITE_NODE_SERVER_URL}/projects/${email}`,
        )
    },
    projectGetOne: async (projectId) => {
        return await axios.get(
            `${import.meta.env.VITE_NODE_SERVER_URL}/projects/detail/${projectId}`,
        )
    },
    projectTaskCreate: async (projectId, task) => {
        return await axios.post(
            `${import.meta.env.VITE_NODE_SERVER_URL}/projects/${projectId}/tasks`,
            task
        )
    },
    projectTaskUpdate: async (projectId, task) => {
        return await axios.put(
            `${import.meta.env.VITE_NODE_SERVER_URL}/projects/${projectId}/tasks`,
            task
        )
    },
    projectTaskDelete: async (projectId, taskId) => {
        return await axios.delete(
            `${import.meta.env.VITE_NODE_SERVER_URL}/projects/${projectId}/tasks/${taskId}`,
        )
    }

}

export default projectService