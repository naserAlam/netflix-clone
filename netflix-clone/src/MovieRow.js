import React, { useState, useEffect } from 'react';
import axios from './axios';
import './MovieRow.css'

const baseUrl = "https://image.tmdb.org/t/p/original/";

function MovieRow({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]);

    // A snippet of code which runs based on a specific  condition/variable
    useEffect(() => {
        // if [], run once when the row loads, and don't run again
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request;
        }
        fetchData();
    }, [fetchUrl])

    console.table(movies)

    return (
        <div>
            <h4>{title}</h4>

            <div className="row__posters">
                {movies.map(movie => (
                    <img
                        key={movie.id}
                        className="row__poster"
                        src={`${baseUrl}${movie.poster_path}`}
                        alt={movie.name} />
                ))}
            </div>
            {/* container -> posters */}

        </div>
    )
}

export default MovieRow