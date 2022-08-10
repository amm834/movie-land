const MovieCard = ({movie}) => {
    return (
        <div className="card col-md-12 p-0 rounded-3 overflow-hidden border-top-0 mb-3">
            <div className="card-img">
                <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/500'} alt="No image"
                     className="w-100 h-100"/>
            </div>
            <div className="card-body">
                <h1 className="card-title">{movie.Title}</h1>
                <p>Year: {movie.Year}</p>
                <p>Type: {movie.Type}</p>
            </div>
        </div>
    )
}

export default MovieCard;