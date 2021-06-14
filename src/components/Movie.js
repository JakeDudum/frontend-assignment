import styled from 'styled-components';

const CardContainer = styled.div`
    flex: 25%;
    height: 400px;
    position: relative;
`;

const Card = styled.div`
    postion: relative;
    text-align: center;
    background-image: url("${props => props.image}");
    background-size: 100% 90%;
    background-repeat: no-repeat;
    width: 85%;
    margin: 20px auto;
    height: 90%;
`;

const CardTitle = styled.h2`
    position: absolute;
    bottom: 0;
    background-color: white;
    width: 90%;
`;

const CardRating = styled.div`
    position: absolute;
    text-align: center;
    top: 30px;
    left: 10%;
    background-color: white;
    border: 1px solid black;
    padding: 5px;
    border-radius: 50%;
`;

function Movie({ title, poster, release, description, rating, count }) {

    return (
        <CardContainer>
            <Card image={poster}>
                <CardRating>{rating}</CardRating>
                <CardTitle>{title}</CardTitle>
            </Card>
        </CardContainer>
    )
}

export default Movie;