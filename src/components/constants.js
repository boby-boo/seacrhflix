export const API_KEY = import.meta.env.VITE_TMDB_KEY;
export const BASE_URL = 'https://api.themoviedb.org/3/';
export const API_OPTIONS = {
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`,
    },
};
export const POSTER_URL = 'https://image.tmdb.org/t/p/w500';

export const genres = [
    { id: 28, genre: 'Action' },
    { id: 12, genre: 'Adventure' },
    { id: 16, genre: 'Animation' },
    { id: 35, genre: 'Comedy' },
    { id: 80, genre: 'Crime' },
    { id: 99, genre: 'Documentary' },
    { id: 18, genre: 'Drama' },
    { id: 10751, genre: 'Family' },
    { id: 14, genre: 'Fantasy' },
    { id: 36, genre: 'History' },
    { id: 27, genre: 'Horror' },
    { id: 10402, genre: 'Music' },
    { id: 9648, genre: 'Mystery' },
    { id: 10749, genre: 'Romance' },
    { id: 878, genre: 'Science Fiction' },
    { id: 10770, genre: 'TV Movie' },
    { id: 53, genre: 'Thriller' },
    { id: 10752, genre: 'War' },
    { id: 37, genre: 'Western' },
];

export const defineCurrentTitleOfGenre = (genres, queryGenre) => {
    const currentTitle = genres.find(
        genre => genre.id === parseInt(queryGenre),
    ).genre;

    return currentTitle;
};
