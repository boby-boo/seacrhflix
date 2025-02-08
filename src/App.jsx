import { BrowserRouter as Router, Routes, Route } from 'react-router';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainPage from './pages/MainPage/MainPage';
import MoviePage from './pages/MoviePage/MoviePage';
import GenrePage from './pages/GenrePage/GenrePage';
import Page404 from './pages/Page404/Page404';

const App = () => {
    return (
        <div className="wrapper">
            <Router>
                <Header />
                <main className="main">
                    <Routes>
                        <Route path="/" element={<MainPage />}></Route>
                        <Route
                            path="movie/:movieId"
                            element={<MoviePage />}
                        ></Route>
                        <Route
                            path="genre/:queryGenre"
                            element={<GenrePage />}
                        ></Route>
                        <Route path="*" element={<Page404 />} />
                    </Routes>
                </main>
                <Footer />
            </Router>
        </div>
    );
};

export default App;
