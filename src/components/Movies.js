import React, { useState } from 'react';
import Modal from './MovieModal'
import './styles/Movies.css'

export default function Movies(props) {
    const [modalDisplay, setmodalDisplay] = useState(false);
    const [movieId, setMovieId] = useState("");
    
    const handleShow = (e) => {
        setmodalDisplay(true);
        setMovieId(e.target.getAttribute("dataid"));
    };

    const handleClose = () => setmodalDisplay(false);
    return (
        <div>
            <div className='row my-4'>
                {props.movies.map((movie) =>(
                            <div className="col-xl-3 col-sm-4" key={movie.id} dataid={movie.id}>
                            <div className="card mt-4"  dataid={movie.id} onClick={handleShow}>
                                <img dataid={movie.id}  className="card-img-top" src={movie.large_cover_image} alt=""/>
                                <div className="card-body" dataid={movie.id}>
                                    <div className="row" dataid={movie.id}>
                                        <h3 dataid={movie.id}  className="card-title ml-2 font-weight-bold">{movie.title}</h3>
                                    </div>
                                    <div className="row" dataid={movie.id}>
                                        <h4 dataid={movie.id}  className="card-title ml-2 font-weight-normal"><i className="fas fa-star"></i> {movie.rating}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                ))}
                <Modal movieId={movieId} show={modalDisplay} onHide={handleClose}/>
            </div>
        </div>
    )
}



