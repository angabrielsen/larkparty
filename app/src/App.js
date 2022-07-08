import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import Playlist from './components/Playlist.js';
import Album from './components/Album.js';


function App() {
  return (
    <div className={"row flex-row-reverse gx-0"}>
      <div className={"col-md-5"}>
        <Album />
      </div>

      <div className={"col-md-7"}>
        <div className={"d-none d-md-block bg-primary"}>
          <Header />
        </div>

        <Playlist />
      </div>
    </div>
  );
}

export default App;
