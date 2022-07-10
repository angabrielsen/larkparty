function Playlist({playlist}) {
  console.log("items: ", playlist);

  return (
    <div className={"playlist"}>
      <div>
        <h5 className={"mb-0 py-2 align-self-center"}>Up Next</h5>
      </div>
      {
        playlist?.map((song, idx) => (
          <ul className={"list-group list-group-horizontal bg-white border-0 rounded-0"}>
            <li className="col-1 list-group-item rounded-0 d-flex justify-content-center align-items-center border-0">{ idx + 1 }</li>

            <li className="col-8 list-group-item rounded-0 align-self-center border-0">
              <p className={`mb-0 lead ${ idx === 0 ? 'display-6' : '' }`}>{ song.track.name }</p>
              <p className={"mb-0"}>{ song.track.artists[0].name }</p>
            </li>

            <li className="col-3 list-group-item rounded-0 border-0 text-end">
              {idx === 0 ? <p className={"mb-0 small"}>Requested By</p> : `` }
              <p className={"lead"}>Ashton</p>
            </li>
          </ul>
        ))
      }
    </div>
  );
}

export default Playlist;
