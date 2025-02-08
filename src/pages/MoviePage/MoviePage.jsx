import { useEffect, useState } from 'react';
import MovieProfile from '../../components/MovieProfile/MovieProfile';
import GenreBadge from '../../components/GenreBadge/GenreBadge';
import MovieTableInfo from '../../components/MovieTableInfo/MovieTableInfo';
import { useParams } from 'react-router';
import { getQueryMovie, getSimilarMovies } from '../../services/services';
import Preloader from '../../components/Preloader/Preloader';

const MoviePage = () => {
    const [movie, setMovie] = useState(null);
    const [similarMovie, setSimilarMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const { movieId } = useParams();

    useEffect(() => {
        fetchMovie(movieId);
    }, []);

    const fetchMovie = async id => {
        setLoading(true);
        const response = await getQueryMovie(id);
        const similarResponse = await getSimilarMovies(id);
        setMovie(response);
        setSimilarMovie(similarResponse);
        setLoading(false);
    };

    if (loading) {
        return <Preloader />;
    }

    return (
        <section className="movie-profile">
            <div className="container">
                <div className="movie-profile-row">
                    <MovieProfile {...movie} />
                </div>
                <div className="movie-profile-genres__row">
                    {movie.genres.map(genre => (
                        <GenreBadge
                            key={genre.id}
                            id={genre.id}
                            genre={genre.name}
                        />
                    ))}
                </div>
                <MovieTableInfo {...movie} />
            </div>
        </section>
    );
};

export default MoviePage;
