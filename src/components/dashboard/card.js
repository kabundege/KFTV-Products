import React from 'react';

export default function card({ movies }) {
    return (
        <div className="displayer">
            {
                movies && movies.map(movie=>(
                    <div key={movie.id.value} className="card">
                        <div className="card-image waves-effect waves-block waves-light">
                            <img src={movie.picture.medium} alt={movie.name.first}/>
                            </div>
                            <div className="card-content">
                            <strong className="card-title activator grey-text text-darken-4">{movie.name.first + " " + movie.name.last}<i className="material-icons right">more_vert</i></strong>
                            <b>{movie.gender}</b>
                            </div>
                            <div className="card-reveal">
                            <strong className="card-title grey-text text-darken-4">{movie.name.first + " " + movie.name.last}<i className="material-icons right">close</i></strong>
                            <p>City: {movie.location.city}</p>
                            <p>email: {movie.email}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
