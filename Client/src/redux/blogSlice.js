import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import blogService from "./blogService";

const initialState = {
    loading: false, 
    success: false,
    blogs: [
        {
            blogAuthor: "",
            blogBody: "",
            blogDate: "",
          
        }
    ],
    blog: {
        blogAuthor: "",
        blogBody: "",
        blogDate: "",
    }
}

export const addBlog = createAsyncThunk("blog/add", async (data) => {
    const {
        blogAuthor,
        blogBody,
        blogDate,
    } = data
 
    const response = await blogService.addBlog(
        blogAuthor,
        blogBody,
        blogDate,
    )
    return response.data
 })
 
 export const blogList = createAsyncThunk("blog/list", async () => {
     // console.log("redux blogList")
     const response = await blogService.blogList();
     // console.log("redux blogList response", response)
     return response.data;
   });

   export const blogSlice = createSlice({
       name: "blog",
       initialState,
       reducers: {},
       extraReducers: (builder) => {
         builder
           //blogs list
           .addCase(blogList.pending, (state, action) => {
             console.log("blogSlice blogList.pending", action.payload);
             state.loading = true;
             state.success = false;
           })
           .addCase(blogList.fulfilled, (state, action) => {
             console.log("blogSlice blogList.fulfilled", action.payload);
             // console.log(action.payload.blogs);
             state.loading = false;
             state.blogs = action.payload.blogs;
             state.success = true;
           })
           .addCase(blogList.rejected, (state, action) => {
             console.log("blogSlice blogList.rejected", action.payload);
             state.loading = false;
             state.success = false;
           })
     
           //add message
           .addCase(addBlog.pending, (state, action) => {
             console.log("blogSlice addBlog.pending", action.payload);
             state.loading = true;
             state.success = false;
           })
           .addCase(addBlog.fulfilled, (state, action) => {
               console.log("blogSlice addBlog.fulfilled", action.payload);
             console.log(action.payload.blog);
             state.loading = false;
             state.success = true;
           })
           .addCase(addBlog.rejected, (state, action) => {
             console.log("blogSlice addBlog.rejected", action.payload);
             state.loading = false;
             state.success = false;
           })
     
        //    // // Get one Message
        //    .addCase(getMessage.pending, (state, action) => {
        //      // console.log("messageSlice getMessage.pending", action.payload);
        //      state.loading = true;
        //      state.success = false;
        //    })
        //    .addCase(getMessage.fulfilled, (state, action) => {
        //      // console.log("messageSlice getMessage.fulfilled", action.payload);
        //      console.log(action.payload);
        //      state.loading = false;
        //      state.message = action.payload;
        //      state.success = true;
        //    })
        //    .addCase(getMessage.rejected, (state, action) => {
        //      // console.log("messageSlice getMessage.rejected", action.payload);
        //      state.loading = false;
        //      state.success = false;
        //    })
     
        //     // Delete one Message
        //     .addCase(deleteMessage.pending, (state, action) => {
        //      // console.log("messageSlice deleteMessage.pending", action.payload);
        //      state.loading = true;
        //      state.success = false;
        //    })
        //    .addCase(deleteMessage.fulfilled, (state, action) => {
        //      // console.log("messageSlice deleteMessage.fulfilled", action.payload);
        //      console.log(action.payload);
        //      state.loading = false;
        //      state.message = action.payload;
        //      state.success = true;
        //    })
        //    .addCase(deleteMessage.rejected, (state, action) => {
        //      // console.log("messageSlice deleteMessage.rejected", action.payload);
        //      state.loading = false;
        //      state.success = false;
        //    });
       },
     });
     
     
     
     export default blogSlice.reducer;