import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Players from './pages/Players/Players';
import './styles/reset.css';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className='app-container'>
        <Header />
        <main className='main-content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/players' element={<Players />} />
            <Route
              path='/tournaments'
              element={<div>Torneos - Próximamente</div>}
            />
            <Route path='/clubs' element={<div>Clubes - Próximamente</div>} />
            <Route path='/map' element={<Home />} />
            <Route path='/news' element={<div>Noticias - Próximamente</div>} />
            <Route
              path='/contact'
              element={<div>Contacto - Próximamente</div>}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
