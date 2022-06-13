import "./Ban.css";
function Ban(props) {
  return (
    <div className="card shadow mb-4">
      <div className="card-body">
        <div className="row">
          <div className="col-lg-3 dining">
            <img
              src={process.env.PUBLIC_URL + "/restaurant.png"}
              alt="table"
            ></img>
          </div>
          <div className="col-lg-3 dining">
          <div c></div>
            <img
              src={process.env.PUBLIC_URL + "/restaurant.png"}
              alt="table"
            ></img>
            <p>Bàn 1</p>
          </div>
          <div className="col-lg-3 dining">
            <img
              src={process.env.PUBLIC_URL + "/restaurant.png"}
              alt="table"
            ></img>
          </div>
          <div className="col-lg-3 dining">
            <img
              src={process.env.PUBLIC_URL + "/restaurant.png"}
              alt="table"
            ></img>
          </div>
          <div className="col-lg-3 dining">
            <img
              src={process.env.PUBLIC_URL + "/restaurant.png"}
              alt="table"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Ban;
