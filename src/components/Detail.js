import { React, useState, useEffect } from "react";
import { useParams } from "react-router";
import Item from "./Item";
import movieApi from "../api/movieApi";
import Badge from "./Badge";
import Rating from "./Rating";
import Comment from "./Comment";

const Detail = () => {
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState([]);
  const [recommend, setRecommend] = useState([]);
  const [slug, setSlug] = useState("");
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
    setSlug(params.slug);
    fetchMovie();
    fetchRecommendContent();
  }, [params.slug]);
  if (loading === false) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {movie.map((item, index) => (
              <div key={index} className="card my-4">
                <iframe width="auto" height="720" src={item.movie.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div className="card-body">
                  <h3 className="card-title">{item.movie.title}</h3>
                  <h5>
                    <Badge genres={item.genres} />
                  </h5>
                  <p className="card-text">{item.movie.content}</p>
                  <span className="text-info">
                    {item.movie.language} - {item.movie.duration} minutes -{" "}
                    {item.movie.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="row mb-4">
          <Rating movieSlug={params.slug} />
        </div>
        <div className="row mb-4">
          <div className="col-md-9 mx-auto">
            <Comment slug={slug} />
          </div>
        </div>
        <div className="row mb-4">
          <Item movies={recommend} loading={loading} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12 my-4">
            <h1 className="text-center">Please sign in to watch movie</h1>
          </div>
        </div>
      </div>
    )
  }
};

export default Detail;
