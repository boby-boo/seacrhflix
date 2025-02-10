import React from 'react';
import { ErrorGif } from '../../assets/icons';

const Page404: React.FC = () => {
    return (
        <div className="error-row">
            <h2 className="error-title">404</h2>
            <p className="error-description">This page not found </p>
            <div className="error-gif">
                <img src={ErrorGif} alt="" />
            </div>
        </div>
    );
};

export default Page404;
