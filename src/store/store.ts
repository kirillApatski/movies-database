import { configureStore } from '@reduxjs/toolkit'
import { moviesApi } from 'Api/muviesApi'

const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(moviesApi.middleware)
})

export type AppStateType = ReturnType<typeof store.getState>

export default store
// @ts-ignore
window.store = store
