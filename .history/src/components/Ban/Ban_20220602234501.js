import './Ban.css'
function Ban(props) {
    return (
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-3 desk">
                            <img src={process.env.PUBLIC_URL +'/restaurant.png'} alt="table"></img>
                        </div>
                        <div className="col-lg-3 desk">
                            <img src={process.env.PUBLIC_URL +'/restaurant.png'} alt="table"></img>
                        </div>
                        <div className="col-lg-4 desk">
                            <img src={process.env.PUBLIC_URL +'/restaurant.png'} alt="table"></img>
                        </div>
                        <div className="col-lg-4 desk">
                            <img src={process.env.PUBLIC_URL +'/restaurant.png'} alt="table"></img>
                        </div>
                        <div className="col-lg-4 desk">
                            <img src={process.env.PUBLIC_URL +'/restaurant.png'} alt="table"></img>
                        </div>
                    </div>
                </div>
            </div>    
    )}
export default Ban;