import { React, useState, useEffect } from "react";
import { useParams } from "react-router";
import Item from "./Item";
import movieApi from "../api/movieApi";
import Badge from "./Badge";
import Rating from "./Rating";

const Detail = () => {
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState([]);
  const [recommend, setRecommend] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await movieApi.getBySlug(params.slug);
        setMovie(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    const fetchRecommendContent = async () => {
      setLoading(true);
      try {
        const response = await movieApi.getByContent({
          slug: params.slug,
        });
        setRecommend(response.data);
        setLoading(false);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovie();
    fetchRecommendContent();
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          {movie.map((item, index) => (
            <div key={index} className="card mt-4">
              <iframe width="auto" height="720" src={item.movie.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <div className="card-body">
                <h3 className="card-title">{item.movie.title}</h3>
                <h5>
                  <Badge genres={item.genres} />
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
        <Rating movieSlug={params.slug} />
      </div>
      <div className="row mt-4">
        <Item movies={recommend} loading={loading} />
      </div>
    </div>
  );
};

export default Detail;
