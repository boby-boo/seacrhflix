import { Link } from 'react-router';
import { POSTER_URL } from '../constants';
import { defineColorStatus } from '../../utils';

const MovieCard = ({ id, title, poster_path, release_date, vote_average }) => {
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
