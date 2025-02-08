import { Link } from 'react-router';
import { GithubIcon, LinkedinIcon } from '../../assets/icons';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-row">
                    <Link to="/" className="header-logo">
                        Search<span> Flix</span>
                    </Link>
                    <ul className="footer-social">
                        <li>
                            <Link
                                to="https://github.com/boby-boo"
                                target="_blank"
                            >
                                <GithubIcon className="icon footer-icon" />
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="https://www.linkedin.com/in/volodymyr-isyk-132265248/"
                                target="_blank"
                            >
                                <LinkedinIcon className="icon footer-icon" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
