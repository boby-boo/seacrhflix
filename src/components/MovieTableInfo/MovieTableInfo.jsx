import { CalendarIcon, DurationIcon, StartIcon } from '../../assets/icons';
import { defineColorStatus } from '../../utils';

const MovieTableInfo = props => {
    const { release_date, vote_average, runtime } = props;

    const rateClass = defineColorStatus(vote_average, 'icon-rate__');

    const detailItems = [
        {
            title: 'Rate:',
            icon: (
                <StartIcon
                    className={`icon movie-table-info__icon ${rateClass}`}
                />
            ),
            value: vote_average?.toFixed(1),
            payload: '/ 10',
        },
        {
            title: 'Duration: ',
            icon: <DurationIcon className="icon movie-table-info__icon" />,
            value: runtime,
            payload: 'minutes',
        },
        {
            title: 'Release Date: ',
            icon: <CalendarIcon className="icon movie-table-info__icon" />,
            value: new Date(release_date).getFullYear(),
            payload: 'year',
        },
    ];

    return (
        <table className="movie-table">
            <tbody>
                {detailItems.map(detail => {
                    const { title, icon, value, payload } = detail;

                    return (
                        <tr className="movie-badge" key={title}>
                            <td>{icon}</td>
                            <td className="movie-badge__title">{title}</td>
                            <td>
                                {value} {payload}
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default MovieTableInfo;
