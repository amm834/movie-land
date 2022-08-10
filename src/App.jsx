import {useEffect, useState} from "react";
import MovieCard from "./MovieCard.jsx";

// http://www.omdbapi.com/?i=tt3896198&apikey=b24ef25a
const App = () => {
    const API_URL = `https://www.omdbapi.com/?apikey=b24ef25a`
    const [searchTerm, setSearchTerm] = useState('One Piece');
    const [movies, setMovies] = useState([]);

    const searchMovie = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json()
        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovie(searchTerm)
    }, [])

    return (
        <div className="container my-4">
            <h1 className="text-center mb-3 display-5 fw-bold">React Movie Land</h1>

            <div className="row mt-5 d-flex justify-content-center">
                <div className="col-lg-8">
                    <div className="input-group ">
                        <input type="text" className="form-control" placeholder="Movie Name"
                               aria-label="Recipient's username" aria-describedby="button-addon2"
                               value={searchTerm}
                               onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button className="btn btn-outline-secondary d-flex justify-content-center align-items-center"
                                type="button" id="button-addon2"
                                onClick={() => {
                                    searchMovie(searchTerm)
                                }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-search" viewBox="0 0 16 16">
                                <path
                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>


            <div className="row mt-5 d-flex justify-content-center">
                <div className="col-md-8">
                    {
                        movies?.length > 0 ? movies.map(movie => <MovieCard movie={movie} key={movie.Poster}/>) :
                            <h1 className="text-center fw-bold display-6">Not Found</h1>
                    }
                </div>
            </div>

        </div>
    )
}

export default App
