import axios from "axios"

const blogService = {
    blogList: async () => {
        return await axios.get(
            `${import.meta.env.VITE_NODE_SERVER_URL}/blogs`
        )
    },
    addBlog: async ( 
        blogAuthor,
        blogBody,
        blogDate,
    ) => {
        return await axios.post(
            `${import.meta.env.VITE_NODE_SERVER_URL}/blogs`,
            {    blogAuthor,
                blogBody,
                blogDate, },
            { headers: { "Content-Type": "application/json" } }
        )
    },
    deleteBlog: async (id) => {
        return await axios.delete(
            `${import.meta.env.VITE_NODE_SERVER_URL}/blogs/${id}`,
            { headers: { "Content-Type": "application/json" } }
        )
    },
 

}

export default blogService