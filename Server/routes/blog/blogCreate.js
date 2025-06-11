import BlogModel from "../../schemas/blogModel.js"

const blogCreate = async (req, res) => {

    let { blogAuthor, blogBody, blogDate } = req.body
    console.log(blogAuthor, blogBody, blogDate)

    if (
        (!blogAuthor) ||
        (!blogBody) ||
        (!blogDate) 
      
    ) {
        console.log("Error: Blog parameters are not valid.")
        res.status(500).send("Error: Blog parameters are not valid.")
    }
    else {
        try {
            const blog = await BlogModel.create({
                blogAuthor, blogBody, blogDate
            })
            console.log("blog", blog)
            res.status(200).json({ "message": "Blog has been Created.", blog: blog, success: true })
        }
        catch (err) {
            console.log(err)
            res.status(500).send(err)
          }
    }
}

export default blogCreate