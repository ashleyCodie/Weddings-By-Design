import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import builderService from "./builderService";

const initialState = {
  loading: false,
    builders: [
        {
            packageSelected: "",
            roles: [] , 
            tasks: []
        }

    ]
};


export const builderList = createAsyncThunk(
  "builder/builderList",
  async () => {
    console.log("redux builderList builder");
    const response = await builderService.builderList();
    console.log(response);
    return response.data;
  }
);

export const builderSlice = createSlice({
  name: "builder",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //Builder List
      .addCase(builderList.pending, (state, action) => {
        console.log("builderSlice builderList.pending", action.payload);
        state.loading = true;
      })
      .addCase(builderList.fulfilled, (state, action) => {
        console.log("builderSlice builderList.fulfilled", action.payload.builders);
        state.loading = false;
        state.builders = action.payload.builders

      })
      .addCase(builderList.rejected, (state, action) => {
        console.log("builderSlice builderList.rejected", action.payload);
        state.loading = false;
      });
  },
});

export default builderSlice.reducer;