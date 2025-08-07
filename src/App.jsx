import Map from './components/Map/Map';
import Navbar from './components/Navbar/Navbar';
import './styles/reset.css';
import './styles/App.css';

function App() {
  return (
    <div className='app-container'>
      <Navbar />
      <main className='main-content'>
        <Map />
      </main>
    </div>
  );
}

export default App;
