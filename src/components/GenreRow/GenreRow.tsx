import React from 'react';
import GenreBadge from '../GenreBadge/GenreBadge';
import { genres } from '../constants';

type GenreRowProps = {
    queryGenre: string;
};

const GenreRow: React.FC<GenreRowProps> = ({ queryGenre }) => {
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
