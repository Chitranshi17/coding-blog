import { reactBlog } from "@/data/BlogData";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    allBlogs: reactBlog,
    blogDetails: {},
    likeBlog: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: "",
  },
  reducers: {
    getSingleBlog: (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        blogDetails: action.payload,
      };
    },
    addLikeBlog: (state, action) => {
      return {};
    },
  },
  extraReducers: (builder) => {},
});
export const { getSingleBlog, addLikeBlog } = blogSlice.actions;
export default blogSlice.reducer;
