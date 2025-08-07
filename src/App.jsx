import Map from './components/Map/Map';
import Header from './components/Header/Header';
import './styles/reset.css';
import './styles/App.css';

function App() {
  return (
    <div className='app-container'>
      <Header />
      <main className='main-content'>
        <Map />
      </main>
    </div>
  );
}

export default App;
