import BlogModel from "../../schemas/blogModel.js";

const blogsGetAll = async (req, res) => {
  try {
    const blogs = await BlogModel.find();
    res.status(200).json({ success: true, blogs: blogs });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

export default blogsGetAll;