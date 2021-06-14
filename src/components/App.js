import logo from '../images/logo.svg';
import Grid from './Grid';
import styled from 'styled-components';

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const App = () => (
	<Container>
		<img src={logo} alt="Timescale" />
		<Grid />
	</Container>
)

export default App;
