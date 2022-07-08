function Playlist() {
  return (
    <div className={"bg-secondary"}>
      <ul className="list-group list-group-horizontal">
        <li className="col-1 list-group-item d-flex justify-content-center align-items-center">1</li>
        <li className="col-8 list-group-item">
          <p className={"mb-0 lead"}>VI. Sweatpants</p>
          <p className={"small"}>Childish Gambino</p>
        </li>
        <li className="col-3 list-group-item">
          <p className={"mb-0 small"}>Requested By</p>
          <p className={"lead"}>Ashton</p>
        </li>
      </ul>
    </div>
  );
}

export default Playlist;
