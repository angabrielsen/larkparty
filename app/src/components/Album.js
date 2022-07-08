import Header from './Header.js';
import cover from '../lifted.jpg'

function Album() {
  return (
    <div className={""}>
      <div className={"col-12 col-md-7 d-md-none bg-primary"}>
        <Header />
      </div>

      <div>
        <img src={cover} alt={"cover"} className={"w-100"} />
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
        <h2 className={"mb-0"}>The Other Side of Paradise</h2>
        <h3 className={"mb-0"}>Glass Animals</h3>
        <p className={"lead"}>How to be a Human Being</p>
        <p className={"small"}>Requested by Ashton</p>
      </div>
    </div>
  );
}

export default Album;
