import { React } from "react";
import { Link } from "react-router-dom";
import Badge from "./Badge";

const Card = (props) => {
  return (
    <>
      <div className="card h-100">
        <Link to={props.slug}>
          <img
            className="card-img-top img-show"
            src={`http://127.0.0.1:9000/${props.poster}`}
            alt="..."
          />
        </Link>
        <div className="card-body">
          <h4 className="card-title">
            <Link to={props.slug}>{props.title}</Link>
          </h4>
          <h5>
            <Badge genres={props.genres} />
          </h5>
          <p className="card-text">{props.content}</p>
        </div>
        <div className="card-footer">
          <small className="text-muted">{props.language} - </small>
          <small className="text-muted">{props.duration} minutes - </small>
          <small className="text-muted">{props.year} - </small>
          <small className="text-muted">{props.country}</small>
        </div>
      </div>
    </>
  );
};

export default Card;
