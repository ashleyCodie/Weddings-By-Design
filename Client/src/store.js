import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./redux/authSlice";
import projectReducer from "./redux/projectSlice";
import builderReducer from "./redux/builderSlice";
import userReducer from "./redux/userSlice";
import blogReducer from "./redux/blogSlice"
import { listenerMiddleware } from "./redux/sessionStorageMiddleware";
import messageReducer from "./redux/messageSlice"

const preloadedState = () => {
  if (sessionStorage.getItem("token") !== null) {
    return {
      auth: {
        loading: false,
        isLoggedIn: false,
        user: {
          firstName: "",
          lastName: "",
          username: "",
          email: "",
          roles: [],
          token: sessionStorage.getItem("token"),
          avatar: "",
          contactNumber: "",
        },
      },
    };
  }
  return undefined;
};

export const store = configureStore({
  reducer: {
    auth: authReducer,
    project: projectReducer,
    builder: builderReducer,
    user: userReducer,
    message: messageReducer,
    blog: blogReducer

  },
  preloadedState: preloadedState(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(listenerMiddleware.middleware),
});