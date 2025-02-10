import axios from 'axios';

import { BASE_URL, PAGE_REQUEST_URL } from './constants';
import { Movie, Movies, TMBDError, ApiOptions } from '../types/movie';

const API_KEY = import.meta.env.VITE_TMDB_KEY;

const options: ApiOptions = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`,
    },
}

export const getMoviesOnPage = async (pageQuery: number = 1): Promise<Movies[] | TMBDError> => {
    try {
        const response = await axios.get(`${BASE_URL}${PAGE_REQUEST_URL}${pageQuery}`, options)
        if ('results' in response.data) {
            return response?.data.results;
        } else {
            return []
        }
    } catch (error: any) {
        return error.response.data;
    }

};

export const getQueryMovie = async (queryId: string): Promise<Movie | TMBDError> => {
    try {
        const response = await axios.get(
            `${BASE_URL}movie/${queryId}?language=en-US`, options,
        );
        return response?.data;
    } catch (error: any) {
        return error.response.data;
    }

};

export const getMoviesByGenre = async (genre: string, page: number): Promise<Movies[] | TMBDError> => {
    try {
        const response = await axios.get(
            `${BASE_URL}discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity&with_genres=${genre}`, options,
        );
        return response.data.results;
    } catch (error: any) {
        return error.response.data;
    }
};

export const getSimilarMovies = async (movieId: number) => {
    const response = await await axios.get(
        `${BASE_URL}movie/${movieId}/similar?language=en-US&page=1`,
    );

    console.log('DO SLIDER');
};

export const getByQueryText = async (text: string): Promise<Movies[] | TMBDError> => {
    try {
        const response = await axios.get(`${BASE_URL}search/movie?query=${text}`, options)
        return response?.data.results;
    } catch (error: any) {
        return error.response.data;
    }
};