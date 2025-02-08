import GenreBadge from '../../components/GenreBadge/GenreBadge';
import { genres } from '../../components/constants';

const GenreRow = ({ queryGenre }) => {
    return (
        <ul className="genre-row">
            {genres.map(item => (
                <GenreBadge
                    key={item.id}
                    {...item}
                    classname={item.id === Number(queryGenre) ? 'active' : ''}
                />
            ))}
        </ul>
    );
};

export default GenreRow;
