import React, { useEffect, useState } from 'react';
const MovieCard = React.lazy(
    () => import('../../components/MovieCard/MovieCard'),
);
import SearchPanel from '../../components/SearchPanel/SearchPanel';
import { useDebounce } from 'react-use';
import { getByQueryText, getMoviesOnPage } from '../../services/services';
import { Movies } from '../../types';
import NotFound from '../../components/NotFound/NotFound';

const MainPage: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [moviesPage, setMoviesPage] = useState<number>(1);
    const [movies, setMovies] = useState<Movies[] | []>([]);
    const [filteredDataMovies, setFilteredDataMovies] = useState<
        Movies[] | null
    >(null);
    const [searchText, setSearchText] = useState<string>('');
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState<string>('');

    useDebounce(() => setDebouncedSearchTerm(searchText), 500, [searchText]);

    useEffect(() => {
        !debouncedSearchTerm
            ? fetchData()
            : filteredMovies(debouncedSearchTerm);
    }, [moviesPage, debouncedSearchTerm]);

    const filteredMovies = async (query = '') => {
        setMoviesPage(1);
        setMovies([]);
        setLoading(true);
        const data = await getByQueryText(query);
        if (Array.isArray(data)) {
            setFilteredDataMovies([...data]);
        }
        setLoading(false);
    };

    const fetchData = async () => {
        setFilteredDataMovies(null);
        setLoading(true);
        const data = await getMoviesOnPage(moviesPage);
        if (Array.isArray(data)) {
            setMovies(prevMovies => [...prevMovies, ...data]);
        }
        setLoading(false);
    };

    const moviesData = filteredDataMovies || movies;

    return (
        <section className="cards">
            <div className="container">
                <SearchPanel
                    searchText={searchText}
                    setSearchText={setSearchText}
                />
                {moviesData.length > 0 ? (
                    <ul className="cards-row">
                        {moviesData.map((movie, index) => (
                            <MovieCard key={movie.id + index} {...movie} />
                        ))}
                    </ul>
                ) : (
                    <NotFound />
                )}
                {moviesPage <= 500 && (
                    <button
                        className="cards-button"
                        disabled={moviesData.length === 0 || loading}
                        onClick={() => setMoviesPage(moviesPage + 1)}
                    >
                        More movies
                    </button>
                )}
            </div>
        </section>
    );
};

export default MainPage;
