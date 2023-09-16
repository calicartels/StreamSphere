import { ArrowBackOutlined } from "@material-ui/icons";
import { Link, Navigate, useLocation } from "react-router-dom";
import "./watch.scss";

export default function Watch() {
  const location = useLocation();
  const movie = location.state.movie;
  if (location.state) {
    return (
      <div className="watch">
        <Link to="/">
          <div className="back">
            <ArrowBackOutlined />
            Home
          </div>
        </Link>
        <video className="video" autoPlay progress controls src={movie.video} />
      </div>
    );
  }else{
    <div className="watch">
      <h1>Not Allowed</h1>
    </div>
  }
}
