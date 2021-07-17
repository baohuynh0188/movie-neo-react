import { React, useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import ratingApi from "../api/ratingApi";
import tools from "../tools";

const Rating = (props) => {
  const [rating, setRating] = useState(0);
  const [username, setUsername] = useState(() => {
    const user = tools.parseJwt(localStorage.getItem("token"));
    return user;
  });

  const ratingChanged = async (newRating) => {
    try {
      const response = await ratingApi.postRating({
        movie_slug: props.movieSlug,
        username: username.sub,
        rating: newRating,
      });
      console.log(response.data);
      console.log(props.movieSlug);
      console.log(username.sub);
      console.log(newRating);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const handleRating = async () => {
      try {
        const response = await ratingApi.getRating(props.movieSlug);
        setRating(response.data.rating);
      } catch (error) {
        console.error(error);
      }
    };
    handleRating();
  }, []);

  return (
    <>
      <div className="col-lg-5">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Rating</h5>
            <ReactStars
              count={10}
              onChange={ratingChanged}
              size={40}
              isHalf={true}
              activeColor="#ffd700"
            />
          </div>
        </div>
      </div>
      <div className="col-lg-7">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">IMDB</h5>
            <h1 className="card-text text-center display-4">
              <span className="badge bg-warning">
                {isNaN(parseFloat(rating).toFixed(2)) ? 0 : parseFloat(rating).toFixed(2)}
              </span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rating;
