import React, { useEffect, useState } from 'react';
import MovieProfile from '../../components/MovieProfile/MovieProfile';
import GenreBadge from '../../components/GenreBadge/GenreBadge';
import MovieTableInfo from '../../components/MovieTableInfo/MovieTableInfo';
import { useParams } from 'react-router';
import { getQueryMovie } from '../../services/services';
import Preloader from '../../components/Preloader/Preloader';
import { isMovie } from '../../types/typeguards';
import { Movie } from '../../types';

const MoviePage: React.FC = () => {
    const [movie, setMovie] = useState<Movie | null>(null);
    // const [similarMovie, setSimilarMovie] = useState(null);
    const [loading, setLoading] = useState<boolean>(true);
    const { movieId = '' } = useParams();

    useEffect(() => {
        fetchMovie(movieId);
    }, []);

    const fetchMovie = async (id: string) => {
        setLoading(true);
        const response = await getQueryMovie(id);
        // const similarResponse = await getSimilarMovies(id);
        if (isMovie(response)) {
            setMovie(response);
        }
        // setSimilarMovie(similarResponse);
        setLoading(false);
    };

    if (loading) {
        return <Preloader />;
    }

    return (
        <section className="movie-profile">
            <div className="container">
                <div className="movie-profile-row">
                    {movie && (
                        <MovieProfile
                            title={movie.title}
                            tagline={movie.tagline}
                            overview={movie.overview}
                            poster_path={movie.poster_path}
                        />
                    )}
                </div>
                <div className="movie-profile-genres__row">
                    {movie &&
                        movie.genres.map(genre => (
                            <GenreBadge
                                key={genre.id}
                                id={genre.id}
                                name={genre.name}
                            />
                        ))}
                </div>
                {movie && (
                    <MovieTableInfo
                        release_date={movie.release_date}
                        vote_average={movie.vote_average}
                        runtime={movie.runtime}
                    />
                )}
            </div>
        </section>
    );
};

export default MoviePage;
