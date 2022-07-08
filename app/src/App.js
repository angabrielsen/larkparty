import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import Playlist from './components/Playlist.js';
import Album from './components/Album.js';


function App() {
  return (
    <div className="container">
      <div className={"row flex-row-reverse"}>
        <div className={"col-md-5"}>
          <Album />
        </div>

        <div className={"col-md-7"}>
          <div className={"d-none d-md-block bg-primary"}>
            <Header />
            <p>Header - Full</p>
          </div>

          <Playlist />
        </div>
      </div>
    </div>
  );
}

export default App;
