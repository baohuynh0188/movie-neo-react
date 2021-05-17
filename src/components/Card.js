import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="card h-100">
          <a href={props.url}>
            <img className="card-img-top" src={props.img} alt="..." />
          </a>
          <div className="card-body">
            <h4 className="card-title">
              <a href={props.url}>{props.title}</a>
            </h4>
            <h6 className="badge badge-info">{props.genre}</h6>
            <p className="card-text">{props.description}</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">★ ★ ★ ★ ☆</small>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
