import { useEffect, useState } from 'react';
import logo from '../images/logo.svg';
import Grid from './Grid';
import SearchBar from './SearchBar';
import styled from 'styled-components';
import API from '../utils/API';

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  position: relative;
`;

function App() {

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
		<Container>
			<a href="/">
				<img src={logo} alt="Timescale" />
			</a>
			<SearchBar search={setMovies} ></SearchBar>
			<Grid movies={movies} />
		</Container>
	)
}

export default App;
