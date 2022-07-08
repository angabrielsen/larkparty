function Playlist() {
  return (
    <div className={"bg-secondary"}>
      <ul className="list-group list-group-horizontal bg-white border-0">
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

      <ul className="list-group list-group-horizontal border-0 bg-white">
        <li className="col-1 list-group-item rounded-0 d-flex justify-content-center align-items-center border-0">2</li>
        <li className="col-8 list-group-item rounded-0 align-self-center border-0">
          <p className={"mb-0"}>VI. Sweatpants</p>
          <p className={"mb-0 small"}>Childish Gambino</p>
        </li>
        <li className="col-3 list-group-item rounded-0 align-self-center border-0 text-end">
          <p className={"mb-0"}>Ashton</p>
        </li>
      </ul>
    </div>
  );
}

export default Playlist;
