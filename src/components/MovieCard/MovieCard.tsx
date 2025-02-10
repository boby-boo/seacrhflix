import React from 'react';
import { Link } from 'react-router';
import { defineColorStatus } from '../../utils/index';
import { POSTER_URL } from '../../services/constants';
import { Movies } from '../../types';

type MovieCardProps = Pick<
    Movies,
    'id' | 'title' | 'poster_path' | 'vote_average'
>;

const MovieCard: React.FC<MovieCardProps> = ({
    id,
    title,
    poster_path,
    vote_average,
}) => {
    const statusColor = defineColorStatus(vote_average);

    return (
        <li key={id} className="movie-card">
            <Link to={`/movie/${id}`}>
                <div className="movie-card-img">
                    <div className={`movie-card-status ${statusColor}`}>
                        Rate {vote_average.toFixed(1)}
                    </div>
                    <img src={`${POSTER_URL}${poster_path}`} alt={title} />
                </div>
                <h2 className="movie-card-title">{title}</h2>
            </Link>
        </li>
    );
};

export default MovieCard;
