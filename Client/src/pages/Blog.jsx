import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBlog, blogList } from "../redux/blogSlice";
import GradientText from "../components/GradientText";

const Blog = () => {
  const [blogForm, setBlogForm] = useState({
    blogAuthor: "",
    blogBody: "",
    blogDate: "",
  });

  const { blogs } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(blogList(blogs));
  }, [blogs]);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(addBlog({ ...blogForm }));
    setBlogForm({ blogAuthor: "", blogBody: "", blogDate: "" });
  };

  return (
    <div className="h-screen">
      <GradientText
        colors={["#f8fafc", "#71717a", "#1f2937", "#71717a", "#f8fafc"]}
        animationSpeed={3}
        showBorder={false}
        className="custom-class  brush  mt-10 text-7xl font-extrabold text-center"
      >
        Blog
      </GradientText>
      <div className="grid gap-6 pb-10 md:grid-cols-3 mt-10 text-center">
          {/* <ul role="list" className="divide-y brush divide-gray-100  "> */}
          {blogs.map((blog, index) => (
              <>
              {/* <li className="flex ml-40 gap-x-6 py-5"> */}
                <div className="text-3xl brush text-zinc-500 ">
                 
                   <span className="font-bold ">Author: </span>{blog.blogAuthor}
             
                </div>
                <div>
                  <p className="flex mt-1 brush text-3xl  text-zinc-500 ">
                    {blog.blogBody}
                  </p>
                </div>

                <div className="flex text-3xl brush text-center text-zinc-500 mb-10 ml-40">
                  <span className="font-bold ">Date:</span>
                  {new Date(blog.blogDate).toLocaleString("en-US", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  })}
                </div>
              {/* </li> */}
              {/* <hr className="text-zinc-500" /> */}
            </>
          ))}
        {/* </ul> */}
        {/* <hr /> */}
      </div>

      <div className=" fixed bottom-10 ml-68 grid gap-6 pb-10 md:grid-cols-4 ps-60 pe-20 mt-10">
        <input
          value={blogForm.blogAuthor}
          onChange={(e) =>
            setBlogForm({ ...blogForm, blogAuthor: e.target.value })
          }
          type="text"
          id="blogAuthor"
          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Jane Smith"
          required
        />
        <input
          value={blogForm.blogBody}
          onChange={(e) =>
            setBlogForm({ ...blogForm, blogBody: e.target.value })
          }
          type="text"
          id="blogBody"
          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="You Comment Here"
          required
        />
        <input
          value={blogForm.blogDate}
          onChange={(e) =>
            setBlogForm({ ...blogForm, blogDate: e.target.value })
          }
          type="date"
          id="blogDate"
          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
        <button
          onClick={handleSubmit}
          type="submit"
          className="text-white brush bg-zinc-500 ml-20 hover:bg-zinc-800 focus:ring-4 focus:outline-none focus:ring-zinc-300 font-medium rounded-lg text-2xl w-44  px-5 py-2.5 text-center dark:bg-zinc-500 dark:hover:bg-zinc-800 dark:focus:ring-zinc-800"
        >
          Add Blog
        </button>
      </div>
    </div>
  );
};

export default Blog;