import { configureStore } from '@reduxjs/toolkit'
import thunkMiddleware  from 'redux-thunk'
import {moviesReducer} from "store/slice/moviesSlice";

const store = configureStore({
  reducer: {
    moviesData: moviesReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware),
})

export type AppStateType = ReturnType<typeof store.getState>

export default store
// @ts-ignore
window.store = store