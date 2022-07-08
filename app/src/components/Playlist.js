function Playlist() {
  return (
    <div className={"bg-secondary"}>
      <div>
        <h5 className={"mb-0 py-2 align-self-center"}>Up Next</h5>
      </div>
      <ul className="list-group list-group-horizontal bg-white border-0 rounded-0">
        <li className="col-1 list-group-item rounded-0 d-flex justify-content-center align-items-center border-0">1</li>
        <li className="col-8 list-group-item rounded-0 align-self-center border-0">
          <p className={"mb-0 lead"}>VI. Sweatpants</p>
          <p className={"mb-0 small"}>Childish Gambino</p>
        </li>
        <li className="col-3 list-group-item rounded-0 border-0 text-end">
          <p className={"mb-0 small"}>Requested By</p>
          <p className={"lead"}>Ashton</p>
        </li>
      </ul>

      <ul className="list-group list-group-horizontal border-0 bg-white rounded-0">
        <li className="col-1 list-group-item rounded-0 d-flex justify-content-center align-items-center border-0">2</li>
        <li className="col-8 list-group-item rounded-0 align-self-center border-0">
          <p className={"mb-0"}>I Rly Rly Like You - Coast Modern Remix</p>
          <p className={"mb-0 small"}>Baby Bulldog, Coast Modern</p>
        </li>
        <li className="col-3 list-group-item rounded-0 align-self-center border-0 text-end">
          <p className={"mb-0"}>James</p>
        </li>
      </ul>
    </div>
  );
}

export default Playlist;
