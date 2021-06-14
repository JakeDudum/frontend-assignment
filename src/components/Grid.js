import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Movie from './Movie';
import API from '../utils/API';

const Flexbox = styled.div`
    text-align: center;
    display: flex;
    flex-wrap: wrap;
`;

function Grid() {

  const [movies, setMovies] = useState([]);
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    if (firstLoad) {
      API.getLatestMovies().then(res => {
        setMovies(res.data.results);
        setFirstLoad(false);
        console.log(movies);
      });
    }
  });

  return (
    <Flexbox>
      {movies.map((movie, i) => (
        <Movie title={movie.title} poster={API.getMovieImage(movie.poster_path)} release={movie.release_date}
          description={movie.overview} rating={movie.vote_average} count={movie.vote_count} />
      ))}
    </Flexbox>
  )
}

export default Grid;