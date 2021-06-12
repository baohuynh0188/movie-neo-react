import { React, useState, useEffect } from "react";
import { useParams } from "react-router";
import genreApi from "../api/genreApi"
import Item from "./Item";

const Genre = () => {
    const params = useParams();
    const [loading, setLoading] = useState(false);
    const [movie, setMovie] = useState([]);
    const getGenre = params.genre;
    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await genreApi.getMovieByGenre(getGenre);
                setMovie(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchMovie();
    }, []);
    console.log(getGenre);
    return (
        <div className="container">
            <div className="row my-4">
                <Item movies={movie} loading={loading} />
            </div>
        </div>
    );
}

export default Genre
