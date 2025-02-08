import { POSTER_URL } from '../constants';

const MovieProfile = ({ title, tagline, overview, poster_path }) => {
    return (
        <>
            <div className="movie-profile-img">
                <img src={`${POSTER_URL}${poster_path}`} alt="" />
            </div>
            <div className="movie-profile-description">
                <div className="movie-profile-text">
                    <h1 className="movie-profile-text__title">{title}</h1>
                    <span className="movie-profile-text__tagline">
                        {tagline}
                    </span>
                    <p className="movie-profile-text__overview">{overview}</p>
                </div>
            </div>
        </>
    );
};

export default MovieProfile;
