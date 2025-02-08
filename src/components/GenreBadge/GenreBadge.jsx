import { Link } from 'react-router';

const GenreBadge = ({ id, genre, classname = '' }) => {
    return (
        <li>
            <Link to={`/genre/${id}`} className={`genre-badge ${classname}`}>
                {genre}
            </Link>
        </li>
    );
};

export default GenreBadge;
