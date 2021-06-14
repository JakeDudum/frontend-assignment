import { useEffect } from 'react';
import styled from 'styled-components';
import API from '../utils/API';

const Flexbox = styled.div`
  font-size: 1.5em;
  text-align: center;
  display: flexbox;
`;

function Grid() {

  useEffect(() => {
    API.getLatestMovies().then(res => console.log(res));
  });

  return (
    <Flexbox>

    </Flexbox>
  )
}

export default Grid;