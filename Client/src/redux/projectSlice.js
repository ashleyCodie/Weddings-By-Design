import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import projectService from "./projectService";

const initialState = {
  loading: false,
  project: {
    weddingName: "",
    coverPic: "",
    packageSelected: "",
    startDate: "",
    weddingDate: "",
    weddingTime: "",
    theme: "",
    colors: "",
    weddingLocation: "",
    status: "Idea/Concepts",
    bride: { bridesFullName: "", bridesNumber: "", bridesEmail: "" },
    groom: { groomsFullName: "", groomsNumber: "", groomsEmail: "" },
    roles: [],
    tasks: [ {roles: [] } ],
    users: [ {firstName: "", lastName: "", email: "" } ]
  },
  projects: []
};

export const addProject = createAsyncThunk(
  "project/addProject",
  async (project) => {
    const response = await projectService.addProject(project);
    return response.data;
  }
);

export const projectList = createAsyncThunk(
  "project/projectList",
  async (email) => {
    console.log("redux projectList project", email);
    const response = await projectService.projectList(email);
    console.log(response);
    return response.data;
  }
);

export const projectGetOne = createAsyncThunk(
  "project/getOne",
  async (projectId) => {
    console.log("redux projectGetOne project", projectId);
    const response = await projectService.projectGetOne(projectId);
    console.log(response);
    return response.data;
  }
);
export const projectTaskCreate = createAsyncThunk(
  "project/taskCreate",
  async (taskInfo) => {
    console.log("redux projectTaskCreate task", taskInfo);
    const { projectId, task } = taskInfo
    const response = await projectService.projectTaskCreate(projectId, task);
    console.log(response);
    return response.data;
  }
);

export const projectTaskUpdate = createAsyncThunk(
  "project/taskUpdate",
  async (taskInfo) => {
    console.log("redux projectTaskUpdate task", taskInfo);
    const { projectId, task } = taskInfo
    const response = await projectService.projectTaskUpdate(projectId, task);
    console.log(response);
    return response.data;
  }
);

export const projectTaskDelete = createAsyncThunk(
  "project/taskDelete",
  async (taskInfo) => {
    console.log("redux projectTaskDelete task", taskInfo);
    const { projectId, taskId } = taskInfo
    const response = await projectService.projectTaskDelete(projectId, taskId);
    console.log(response);
    return response.data;
  }
);

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    //Add Project
      .addCase(addProject.pending, (state, action) => {
        console.log("projectSlice addProject.pending", action.payload);
        state.loading = true;
      })
      .addCase(addProject.fulfilled, (state, action) => {
        console.log("projectSlice addProject.fulfilled", action.payload);
        state.loading = false;
      })
      .addCase(addProject.rejected, (state, action) => {
        console.log("projectSlice addProject.rejected", action.payload);
        state.loading = false;
      })

      //Project List
      .addCase(projectList.pending, (state, action) => {
        console.log("projectSlice projectList.pending", action.payload);
        state.loading = true;
      })
      .addCase(projectList.fulfilled, (state, action) => {
        console.log("projectSlice projectList.fulfilled", action.payload.projects);
        state.loading = false;
        state.projects = action.payload.projects

      })
      .addCase(projectList.rejected, (state, action) => {
        console.log("projectSlice projectList.rejected", action.payload);
        state.loading = false;
      })

      //project get one
      .addCase(projectGetOne.pending, (state, action) =>{
        console.log("projectSlice projectGetOne.pending" , action.payload)
        state.loading = true;
      })
      .addCase(projectGetOne.fulfilled, (state, action) => {
        console.log("projectSlice projectGetOne.fulfilled", action.payload.project);
        state.loading = false;
        state.project = action.payload.project

      })
      .addCase(projectGetOne.rejected, (state, action) => {
        console.log("projectSlice projectTaskUpdate.rejected", action.payload);
        state.loading = false;
      })

        //Project Task Create
        .addCase(projectTaskCreate.pending, (state, action) =>{
          console.log("projectSlice projectTaskCreate.pending" , action.payload)
          state.loading = true;
        })
        .addCase(projectTaskCreate.fulfilled, (state, action) => {
          console.log("projectSlice projectTaskCreate.fulfilled", action.payload.project);
          state.loading = false;
          // state.project = action.payload.project
  
        })
        .addCase(projectTaskCreate.rejected, (state, action) => {
          console.log("projectSlice projectTaskCreate.rejected", action.payload);
          state.loading = false;
        })

      //Project Task Update One
      .addCase(projectTaskUpdate.pending, (state, action) =>{
        console.log("projectSlice projectTaskUpdate.pending" , action.payload)
        state.loading = true;
      })
      .addCase(projectTaskUpdate.fulfilled, (state, action) => {
        console.log("projectSlice projectTaskUpdate.fulfilled", action.payload.project);
        state.loading = false;
        // state.project = action.payload.project

      })
      .addCase(projectTaskUpdate.rejected, (state, action) => {
        console.log("projectSlice projectTaskUpdate.rejected", action.payload);
        state.loading = false;
      })


     //Project Task Delete
      .addCase(projectTaskDelete.pending, (state, action) =>{
        console.log("projectSlice projectTaskDelete.pending" , action.payload)
        state.loading = true;
      })
      .addCase(projectTaskDelete.fulfilled, (state, action) => {
        console.log("projectSlice projectTaskDelete.fulfilled", action.payload.project);
        state.loading = false;
        // state.project = action.payload.project

      })
      .addCase(projectTaskDelete.rejected, (state, action) => {
        console.log("projectSlice projectTaskDelete.rejected", action.payload);
        state.loading = false;
      })
  },
});

export default projectSlice.reducer;