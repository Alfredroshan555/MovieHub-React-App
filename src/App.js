import { useEffect, useState } from 'react';
import './App.css';
import Card from './Card'
// 654d67de
const url = 'http://www.omdbapi.com?apikey=654d67de'
const movie1={
  "Title":"Amazing Spiderman Syndrome",
  "Year":"2012",
  "imdbID":"tt2586634",
  "Type":"movie",
  "Poster":"N/A"
}
const buttonStyle={
  'padding': '15px',
  'border-radius': '13px'
}


function App() {
  const [movies, setMovies] = useState([])
  const [search,setSearch] = useState('')
  


  const getMoviesData = async (title) => {
    const response = await fetch(`${url}&s=${title}`)
    const data = await response.json()
    console.log(data.Search);
    setMovies(data.Search)
  }

  useEffect(() => {
    getMoviesData("Superman")
  }, [])
  return (
    <div className="app">
      <h1>Movies Hub</h1><div className="search">
        <input
          placeholder="Search for movies"
          value={search}
          onChange={(e) => {setSearch(e.target.value) }}
        />
        <button className='button' onClick={()=>getMoviesData(search)} style={ buttonStyle }
        >Seacrh</button>

      </div>
      <div className="container">
        {
          movies?.length > 0 
          ? movies.map((movie)=>(
            <Card movie={movie} key={movie.imdbID} />
          ))
          : <div className="empty">
            <h2>No movies found !!</h2>
          </div>
        }
  
      
      </div>
    </div>
  );
}


export default App;
