import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";

const fetchCounter = createAsyncThunk(
  "tasks/fetchAll",
  // Use the underscore as the name of the first parameter,
  // because in this operation we do not need it
  async (_, punkAPI) => {
    try {
      const { data } = await axios.get("/tasks");
      console.log(data);
      return data;
    } catch (e) {
      // If the request is mistaken, return the promise
      // which will be rejected with the text of the error
      console.log(e);
      // return punkAPI.rejectWithValue(e.message);
    }
  }
);

const fetchTasks = createAsyncThunk(
  "tasks/fetchAll",
  // Use the underscore as the name of the first parameter,
  // because in this operation we do not need it
  async (_, punkAPI) => {
    try {
      const { data } = await axios.get("/tasks");
      console.log(data);
      return data;
    } catch (e) {
      // If the request is mistaken, return the promise
      // which will be rejected with the text of the error
      console.log(e);
      // return punkAPI.rejectWithValue(e.message);
    }
  }
);

export { fetchCounter, fetchTasks };
