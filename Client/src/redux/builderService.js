import axios from "axios"

const builderService = {
    builderList: async () => {
        return await axios.get(
            `${import.meta.env.VITE_NODE_SERVER_URL}/builders/`,
        )
    },

}

export default builderService