import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "./userService";

const initialState = {
  loading: false,
  users: [
    {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      roles: [],
      token: "",
      avatar: "",
      contactNumber: "",
      company: ""
    },

    
  ],
  user: [
    {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      roles: [],
      token: "",
      avatar: "",
      contactNumber: "",
      company: ""
    },
  ],
};

export const userList = createAsyncThunk("user/list", async () => {
  const response = await userService.userList();
  return response.data;
});

export const addUser = createAsyncThunk("user/addUser", async (data) => {
    const {
     firstName, 
     lastName,
     email, 
     username,
     password,
     roles,
     avatar,
     contactNumber,
     company
    } = data
 
    const response = await userService.addUser(
        firstName, 
        lastName,
        email, 
        username,
        password,
        roles,
        avatar,
        contactNumber,
        company
    )
    return response.data
 })



export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //List of Users
      .addCase(userList.pending, (state, action) => {
        console.log("userSlice userList.pending");
        state.loading = true;
      })
      .addCase(userList.fulfilled, (state, action) => {
        console.log("userSlice userList.fulfilled");
        state.loading = false;
        state.isLoggedIn = true;
        state.users = action.payload.users;
      })
      .addCase(userList.rejected, (state, action) => {
        console.log("userSlice userList.rejected");
        state.loading = false;
      })

      //Add New User
      .addCase(addUser.pending, (state, action) => {
        console.log("userSlice addUser.pending");
        state.loading = true;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        console.log("userSlice addUser.fulfilled");
        state.loading = false;
        state.isLoggedIn = true;
        state.users = action.payload.user;
      })
      .addCase(addUser.rejected, (state, action) => {
        console.log("userSlice addUser.rejected");
        state.loading = false;
      });
  },
});

export default userSlice.reducer;