import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MoviePage from './pages/MoviePage/MoviePage';
import GenrePage from './pages/GenrePage/GenrePage';
import MainPage from './pages/MainPage/MainPage';
import Page404 from './pages/Page404/Page404';

const App: React.FC = () => {
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
