import { React, useState, useEffect } from "react";
import { useParams } from "react-router";
import movieApi from "../api/movieApi";
import Badge from "./Badge";

const Detail = () => {
  const params = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await movieApi.getbySlug(params.slug);
        setMovie(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovie();
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          {movie.map((item, index) => (
            <div key={index} className="card mt-4">
              <img
                className="card-img-top img-fluid"
                src={`http://127.0.0.1:9000/${item.movie.poster}`}
                alt="..."
              />
              <div className="card-body">
                <h3 className="card-title">{item.movie.title}</h3>
                <h5>
                  <Badge genre={item.genre} />
                </h5>
                <p className="card-text">{item.movie.content}</p>
                <span className="text-info">
                  {item.movie.language} - {item.movie.duration} -{" "}
                  {item.movie.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
            <a href="#!">
              <img
                className="card-img-top"
                src="https://via.placeholder.com/700x400"
                alt="..."
              />
            </a>
            <div className="card-body">
              <h4 className="card-title">
                <a href="#!">Item One</a>
              </h4>
              <h5>$24.99</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                numquam aspernatur!
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">★ ★ ★ ★ ☆</small>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
            <a href="#!">
              <img
                className="card-img-top"
                src="https://via.placeholder.com/700x400"
                alt="..."
              />
            </a>
            <div className="card-body">
              <h4 className="card-title">
                <a href="#!">Item One</a>
              </h4>
              <h5>$24.99</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                numquam aspernatur!
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">★ ★ ★ ★ ☆</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
