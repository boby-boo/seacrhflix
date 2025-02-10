import { Movie, Movies } from "./movie";

export const isMovie = (movie: any): movie is Movie => 'genres' in movie;
export const isMovies = (movie: any): movie is Movies[] => 'title' in movie[0];