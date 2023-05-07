import axios from "axios";

export const instance = axios.create({
  baseURL: 'https://api.kinopoisk.dev/v1.3/',
  headers: {
    'X-API-KEY': 'PTMG118-RMPMYEF-JCEEDCD-R6M514V'
  }
})