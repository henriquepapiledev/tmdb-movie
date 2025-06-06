import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../pages/Home';
import Footer from '../components/Footer';
import Movie from '../pages/Movie';
import ScrollToTop from '../utils/ScrollToTop';

const routes = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Header />
    <main className="AppBody">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="filme/:id" element={<Movie />} />
      </Routes>
    </main>
    <Footer />
  </BrowserRouter>
);

export default routes;
