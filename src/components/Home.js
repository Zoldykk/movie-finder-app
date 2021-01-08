import React, { useState, useEffect } from 'react';
import Nav from "../components/Nav";
import Search from "../components/Search";
import Movies from "../components/Movies";

function Home() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    await fetch("https://yts.mx/api/v2/list_movies.json")
      .then((response) => {
        return response.json();
      })
      .then((results) => {
        setMovies(results.data.movies);
      });
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const searchForMovies = (data) =>{
    fetch(`https://yts.mx/api/v2/list_movies.json?query_term=${data}`)
    .then(response =>{
      return response.json();
    }).then(results =>{
      if(results.data.movie_count === 0){
        alert('Movie not found')
      }else{
        setMovies(results.data.movies);
      }
    })
  }
  
  return (
      <div className="Home container-fluid px-0">
        <Nav />
        <Search getUserSearch={searchForMovies}/>
        <Movies movies={movies} />
      </div>
  );
}

export default Home;
