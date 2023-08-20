import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
    headers: {
      'X-API-KEY': process.env.REACT_APP_TOKEN!
    }
  }),
  endpoints: builder => ({
    getMovies: builder.query<ResponseType, string | null>({
      query: page => ({
        url: 'movie',
        params: {
          limit: 14,
          type: 'movie',
          page
        }
      })
    })
  })
})

export const { useGetMoviesQuery } = moviesApi

export type ResponseType = {
  docs: Array<VideosType>

  limit: number
  page: number
  pages: number
  total: number
}

export type VideosType = {
  alternativeName: string
  countries: [{ name: string }]
  description: string
  enName: null
  externalId: {
    imdb: string
    kpHD: string
    tmdb: number
  }
  genres: [{ name: string }]
  id: number
  logo: { url: string }
  movieLength: number
  name: string
  names: [{ name: string }]
  poster: { url: string }
  rating: {
    await: null
    filmCritics: number
    imdb: number
    kp: number
    russianFilmCritics: number
  }
  shortDescription: string
  type: string
  votes: {
    await: number
    filmCritics: number
    imdb: number
    kp: number
    russianFilmCritics: number
  }
  watchability: {
    items: [{ name: string }]
  }
  year: number
}
