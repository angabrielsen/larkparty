import Header from './Header.js';

function Album() {
  return (
    <div className={"bg-warning"}>
      <div className={"col-12 col-md-7 d-md-none bg-primary"}>
        <Header />
      </div>

      <p>Album</p>
    </div>
  );
}

export default Album;
