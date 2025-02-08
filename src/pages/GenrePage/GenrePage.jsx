import { useEffect, useState } from 'react';
import MovieCard from '../../components/MovieCard/MovieCard';
import { getMoviesByGenre } from '../../services/services';
import { useParams } from 'react-router';
import Preloader from '../../components/Preloader/Preloader';
import GenreRow from '../../components/GenreRow/GenreRow';
import { defineCurrentTitleOfGenre, genres } from '../../components/constants';

const GenrePage = () => {
    const [title, setTitle] = useState('');
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [moviesPage, setMoviesPage] = useState(1);

    const { queryGenre } = useParams();

    useEffect(() => {
        console.log('[moviesPage, queryGenre] useEffect');
        fetchData(queryGenre, moviesPage);
    }, [moviesPage]);

    useEffect(() => {
        console.log('queryGenre useEffect');
        setMoviesPage(1);
        setMovies([]);
        fetchData(queryGenre, moviesPage);
        setTitle(defineCurrentTitleOfGenre(genres, queryGenre) || '');
    }, [queryGenre]);

    const fetchData = async (genre, currentPage) => {
        if (!genre) return;
        setLoading(true);
        const data = await getMoviesByGenre(genre, currentPage);
        setMovies([...movies, ...data]);

        setLoading(false);
    };

    if (loading) {
        return <Preloader />;
    }

    return (
        <section className="cards">
            <div className="container">
                <h2>
                    {title
                        ? `Results of search by genre: ${title}`
                        : 'Choose your genre'}
                </h2>
                <GenreRow queryGenre={queryGenre} />
                <ul className="cards-row">
                    {movies &&
                        movies.map(movie => (
                            <MovieCard key={movie.id} {...movie} />
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
