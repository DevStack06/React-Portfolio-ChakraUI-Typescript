import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface CounterState {
  avatar: Array<Object>;
  filterData: Array<Object>;
}

const initialState: CounterState = {
  avatar: [],
  filterData: [],
};

export const fetchAvatar = createAsyncThunk(
  "avatar",
  async (pageNum, thunkAPI) => {
    const response = await axios.get(
      "https://rickandmortyapi.com/api/character?page=2"
    );
    console.log("here is the d", response.data);
    thunkAPI.dispatch(setData(response.data));
    return response.data;
  }
);

export const avatarSlice = createSlice({
  name: "avatar",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.avatar = action.payload;
    },
    filter: (state, action) => {
      state.avatar = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setData } = avatarSlice.actions;

export default avatarSlice.reducer;
