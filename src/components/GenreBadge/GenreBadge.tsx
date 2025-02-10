import React from 'react';
import { Link } from 'react-router';

type GenreBadgeProps = {
    id: number;
    name: string;
    classname?: string;
};

const GenreBadge: React.FC<GenreBadgeProps> = ({
    id,
    name,
    classname = '',
}) => {
    return (
        <li>
            <Link to={`/genre/${id}`} className={`genre-badge ${classname}`}>
                {name}
            </Link>
        </li>
    );
};

export default GenreBadge;
