import React, { useEffect, useState } from 'react';
import MovieCard from '../../components/MovieCard/MovieCard';
import { getMoviesByGenre } from '../../services/services';
import { useParams } from 'react-router';
import Preloader from '../../components/Preloader/Preloader';
import GenreRow from '../../components/GenreRow/GenreRow';
import { defineCurrentTitleOfGenre, genres } from '../../components/constants';
import { Movies } from '../../types';
import { isMovies } from '../../types/typeguards';
import { c } from 'vite/dist/node/moduleRunnerTransport.d-CXw_Ws6P';

const GenrePage: React.FC = () => {
    const [title, setTitle] = useState<string>('');
    const [movies, setMovies] = useState<Movies[] | []>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [moviesPage, setMoviesPage] = useState<number>(1);

    const { queryGenre = '' } = useParams();

    useEffect(() => {
        fetchData(queryGenre, moviesPage);
    }, [moviesPage]);

    useEffect(() => {
        fetchDataByQueryGenre(queryGenre, 1);
        setTitle(defineCurrentTitleOfGenre(genres, queryGenre) || '');
    }, [queryGenre]);

    const fetchData = async (genre: string, currentPage: number) => {
        if (!genre) return;

        setLoading(true);

        const data = await getMoviesByGenre(genre, currentPage);

        if (isMovies(data)) {
            setMovies([...movies, ...data]);
        }

        setLoading(false);
    };

    const fetchDataByQueryGenre = async (
        genre: string,
        currentPage: number,
    ) => {
        setLoading(true);
        setMoviesPage(1);
        setMovies([]);

        const data = await getMoviesByGenre(genre, currentPage);

        if (isMovies(data)) {
            setMovies(data);
        }

        setLoading(false);
    };

    // if (loading) {
    //     return <Preloader />;
    // }

    return (
        <section className="cards">
            <div className="container">
                <h2 className="search-result-title">
                    {title
                        ? `Results of search by genre: ${title}`
                        : 'Choose your genre'}
                </h2>
                <GenreRow queryGenre={queryGenre} />
                {loading && <Preloader />}
                <ul className="cards-row">
                    {movies &&
                        movies.map((movie, index) => (
                            <MovieCard key={movie.id + index} {...movie} />
                        ))}
                </ul>
                {moviesPage <= 500 && (
                    <button
                        className="cards-button"
                        disabled={loading}
                        onClick={() => setMoviesPage(moviesPage + 1)}
                    >
                        More movies
                    </button>
                )}
            </div>
        </section>
    );
};

export default GenrePage;
