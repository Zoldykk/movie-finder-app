import React, { useState, useEffect } from 'react'
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import './styles/MovieModal.css'

export default function MovieModal(props) {
    const [movies, setMovies] = useState({})

    useEffect(() => {
        const movieId = props.movieId;
        fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${movieId}`)
        .then(response =>{
            return response.json()
        }).then(results =>{
            setMovies(results.data.movie);
        })
        setMovies({})
    }, [props.show])

    return (
        <Modal show={props.show}>
            <ModalHeader>
                <div className="row col-12 d-flex justify-content-between">
                    <ModalTitle>{movies.title}</ModalTitle>
                        <div className="row">
                            <button type="button" className="close" onClick={props.onHide}>
                                <i class="fas fa-times"></i>
                            </button>   
                        </div>
                      
                </div>
            </ModalHeader>
            <ModalBody>
                <img className="card-img-top" src={movies.large_cover_image} alt=""/>
            </ModalBody>
            <ModalFooter>
                <div className="row col-12 d-flex justify-content-between">
                    <h4>Year of release: {movies.year}</h4>            
                    <h4>Runtime: {movies.runtime} minutes</h4>            
                </div>
                <div className="row col-12">
                    <p><h4>Summary:</h4> {movies.description_full}</p>          
                </div>
            </ModalFooter>
        </Modal>
    )
}

