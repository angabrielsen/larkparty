import React, { useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './components/Header.js';
import Playlist from './components/Playlist.js';
import Album from './components/Album.js';

function App() {
  const [playlist, setPlaylist] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPlaylist = async () => {
      setIsLoading(true);

      console.log(isLoading);
      try {
        const res = await fetch(
          'http://localhost:9000/playlist',
        ).then(res => res.text())
          .then(res => {
            setPlaylist(JSON.parse(res));
          });
      } catch (error) {

      }
      setIsLoading(false);
    };
    fetchPlaylist();
  }, [setPlaylist]);

  // const fetchPlaylist = () => {
  //   fetch(
  //     `http://localhost:9000/playlist`,
  //     {
  //       method: "GET"
  //     }
  //   )
  //     .then(res => res.text())
  //     .then(res => {
  //       setPlaylist(JSON.parse(res));
  //     })
  //     .catch(err => err)
  // };

  // useEffect(() => {
  //   fetchPlaylist();
  // }, []);

  return (
    <div className={"row flex-row-reverse gx-0"}>
      <div className={"col-md-5"}>
        <Album />
      </div>

      <div className={"col-md-7"}>
        <div className={"d-none d-md-block bg-primary"}>
          <Header />
        </div>

        { isLoading ? <p>Loading...</p> : <Playlist playlist={playlist.items} /> }
      </div>
    </div>
  );
}

export default App;
