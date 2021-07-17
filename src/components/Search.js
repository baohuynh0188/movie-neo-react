import { React, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import movieApi from "../api/movieApi";
import Item from "./Item";

const Search = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(false);
    const [movie, setMovie] = useState([]);

    console.log(location.search)

    useEffect(() => {
        const fetchMovie = async () => {
            setLoading(true);
            try {
                const response = await movieApi.searchByName(location.search);
                setMovie(response.data);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        };
        fetchMovie();
    }, [location.search]);

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-1"></div>
                <div className="col-lg-10">
                    <div className="row my-4"></div>
                    <div className="row my-4">
                        <Item movies={movie} notFound={loading} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Search
