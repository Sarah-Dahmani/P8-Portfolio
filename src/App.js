import './style/global-style.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Error from './pages/Error/Error';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './pages/About/About';
import Work from './pages/Work/Work';
import AddWork from './pages/AddWork/AddWork';
import Loader from './components/Loader/Loader';

const Home = lazy(() => import('./pages/Home/Home'));

function App() {
  // Structure de l'application
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Suspense fallback={<Loader />}><Home /></Suspense>} />
        <Route path='/about' element={<About />} />
        <Route path='/admin' element={<AddWork />} />
        <Route path='/work/:id' element={<Work />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;

