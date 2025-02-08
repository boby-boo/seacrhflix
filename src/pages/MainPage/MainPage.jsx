import { useEffect, useState } from 'react';
import MovieCard from '../../components/MovieCard/MovieCard';
import { getByQueryText, getMoviesOnPage } from '../../services/services';
import SearchPanel from '../../components/SearchPanel/SearchPanel';
import { useDebounce } from 'react-use';

const MainPage = () => {
    const [loading, setLoading] = useState(false);
    const [moviesPage, setMoviesPage] = useState(1);
    const [movies, setMovies] = useState([]);
    const [filteredDataMovies, setFilteredDataMovies] = useState(null);
    const [searchText, setSearchText] = useState('');
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

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
        setFilteredDataMovies([...data]);
        setLoading(false);
    };

    const fetchData = async () => {
        setFilteredDataMovies(null);
        setLoading(true);
        const data = await getMoviesOnPage(moviesPage);
        setMovies([...movies, ...data]);
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
                <ul className="cards-row">
                    {moviesData.map(movie => (
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

export default MainPage;
