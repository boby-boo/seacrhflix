import axios from 'axios';
import { BASE_URL } from '../components/constants';
import { PAGE_REQUEST_URL } from './constants';

const API_KEY = import.meta.env.VITE_TMDB_KEY;

export const request = async url => {
    try {
        const response = await axios.get(url, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${API_KEY}`,
            },
        });

        return response.data;
    } catch (e) {
        console.error('Error: ', e);
        return e;
    }
};

export const getMoviesOnPage = async (pageQuery = 1) => {
    const response = await request(
        `${BASE_URL}${PAGE_REQUEST_URL}${pageQuery}`,
    );
    return response.results;
};

export const getQueryMovie = async queryId => {
    const response = await request(
        `${BASE_URL}movie/${queryId}?language=en-US`,
    );

    return response;
};

export const getMoviesByGenre = async (genre, page) => {
    const response = await request(
        `${BASE_URL}discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity&with_genres=${genre}`,
    );

    return response.results;
};

export const getSimilarMovies = async movieId => {
    const response = await request(
        `${BASE_URL}movie/${movieId}/similar?language=en-US&page=1`,
    );

    console.log('DO SLIDER');
};

export const getByQueryText = async text => {
    const response = await request(`${BASE_URL}search/movie?query=${text}`);
    return response.results;
};
