import styled from 'styled-components';
import Movie from './Movie';
import API from '../utils/API';

const Flexbox = styled.div`
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    border-top: #C0C4CC solid 2px;
    margin-top: 10px;
`;

function Grid({ movies }) {

  return (
    <Flexbox>
      {movies.map((movie, i) => (
        <Movie key={i} title={movie.title} poster={API.getMovieImage(movie.poster_path)} release={movie.release_date}
          description={movie.overview} rating={movie.vote_average} count={movie.vote_count} />
      ))}
    </Flexbox>
  )
}

export default Grid;