import React from 'react';
import { Link, NavLink } from 'react-router';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="container">
                <nav className="header-row">
                    <Link to="/" className="header-logo">
                        <span>Search</span> Flix
                    </Link>
                    <ul className="header-menu">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                'nav-link' +
                                (isActive ? ' header-menu__active-link' : '')
                            }
                        >
                            Movies
                        </NavLink>
                        <NavLink
                            to="genre/35"
                            className={() =>
                                'nav-link' +
                                (location.pathname.startsWith('/genre')
                                    ? ' header-menu__active-link'
                                    : '')
                            }
                        >
                            Genres
                        </NavLink>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
