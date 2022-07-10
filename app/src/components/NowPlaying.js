import Header from './Header.js';

function NowPlaying({nowPlaying}) {
  const nowPlayingTrack = nowPlaying ? nowPlaying[0].track : ''
  const albumCover = nowPlayingTrack ? nowPlayingTrack.album.images[0].url : ''

  return (
    <div className={""}>
      <div className={"col-12 col-md-7 d-md-none bg-primary"}>
        <Header />
      </div>

      <div>
        <img src={albumCover} alt={"cover"} className={"w-100"} />
      </div>

      <div className={"progress position-relative rounded-0"} style={{height: '40px'}}>
        <div className={"progress-bar"} role={"progressbar"} style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
        </div>

        <div className={"position-absolute start-0 align-self-center ps-2"}>
          <p className={"mb-0"}>3:01</p>
        </div>

        <div className={"position-absolute end-0 align-self-center pe-2"}>
          <p className={"mb-0"}>4:18</p>
        </div>
      </div>

      <div>
        <h2 className={"mb-0"}>{ nowPlayingTrack.name }</h2>
        <h3 className={"mb-0"}>{ nowPlayingTrack.album.artists[0].name }</h3>
        <p className={"lead"}>{ nowPlayingTrack.album.name }</p>
        <p className={"small"}>Requested by Ashton</p>
      </div>
    </div>
  );
}

export default NowPlaying;
