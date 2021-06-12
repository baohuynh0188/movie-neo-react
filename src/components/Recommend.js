import { React, useState, useEffect } from "react";
import Item from "./Item";
import movieApi from "../api/movieApi";
import tools from "../tools";

const Recommend = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);

  let userLogin = "";
  if (localStorage.getItem("token")) {
    userLogin = tools.parseJwt(localStorage.getItem("token")).sub;
  } else {
    userLogin = "";
  }

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const response = await movieApi.getByUser({
          username: userLogin,
        });
        if (response !== undefined) {
          setMovie(response.data);
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="row my-4"></div>
          <div className="row">
            <Item movies={movie} loading={loading} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommend;
