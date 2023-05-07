import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesApi, MoviesType} from "Api/muviesApi";

interface MoviesState {
  docs: Array<MoviesType>;
  loading: boolean;
  error: string | null;
}

const initialState: MoviesState = {
  docs: [],
  loading: false,
  error: null,
};

export const getMovies = createAsyncThunk('movies/get', async () => {
  try {
    const res = await moviesApi.getMovie()
    setState(res.data)
    return res.data
  }catch (e) {
  }
})

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: initialState,
  reducers: {
    setState(state, actions) {
      state = actions.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMovies.fulfilled, (state, action) => {
        if (action.payload) state.docs = action.payload.docs;
      })
  },
})

export const moviesReducer = moviesSlice.reducer
export const {setState} = moviesSlice.actions