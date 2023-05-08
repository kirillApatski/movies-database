import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesApi, MoviesType} from "Api/muviesApi";

type MoviesState = {
  docs: Array<MoviesType>;
}

const initialState: MoviesState = {
  docs: [],
};

export const getMovies = createAsyncThunk('movies/movies', async () => {
  try {
    const res = await moviesApi.getMovie()
    setState(res.data)
    return res.data
  }catch (e) {
  }
})
export const getSeries = createAsyncThunk('movies/series', async () => {
  try {
    const res = await moviesApi.getSeries()
    setSeries(res.data)
    return res.data
  } catch (e) {

  }
})

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: initialState,
  reducers: {
    setState(state, actions) {
      state = actions.payload
    },
    setSeries(state, actions) {
      state = actions.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMovies.fulfilled, (state, action) => {
        if (action.payload) state.docs = action.payload.docs;
      })
      .addCase(getSeries.fulfilled, (state, action) => {
        if (action.payload) state.docs = action.payload.docs;
      } )
  },
})

export const moviesReducer = moviesSlice.reducer
export const {setState, setSeries} = moviesSlice.actions