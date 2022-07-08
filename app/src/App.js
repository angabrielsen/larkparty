import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import Playlist from './components/Playlist.js';
import Album from './components/Album.js';


function App() {
  return (
    <div className="container">
      <div className={"row"}>
        <Header />
        <Playlist />
      </div>
    </div>
  );
}

export default App;
