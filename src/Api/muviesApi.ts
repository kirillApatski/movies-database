import {instance} from "Api/instance";

export const moviesApi = {
  getMovie() {
    return  instance.get<ResponseType>('movie?limit=30&type=movie')
  },
  getSeries() {
    return instance.get<ResponseType>(`movie?limit=30&type=tv-series`)
  }
}

export type ResponseType = {
  docs: Array<MoviesType>
  limit: number
  page: number
  pages: number
  total: number
}

export type MoviesType = {
  alternativeName: string
  countries: [{name: string}]
  description: string
  enName: null
  externalId: {
    imdb:string
    kpHD: string
    tmdb: number
  }
  genres:[{name: string}]
  id: number
  logo: {url: string}
  movieLength: number
  name: string
  names: [{name: string}]
  poster: {url: string}
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
    items: [{name: string}]
  }
  year: number
}