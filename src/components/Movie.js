import { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';

const CardContainer = styled.div`
    flex: 25%;
    height: 400px;
    position: relative;

    @media(min-width: 1921px) {
        flex: 20%;
    }

    @media(max-width: 1024px) {
        flex: 33%;
    }

    @media(max-width: 768px) {
        flex: 50%;
    }

    @media(max-width: 480px) {
        flex: 100%;
    }
`;

const Card = styled.div`
    postion: relative;
    text-align: center;
    background-image: url("${props => props.image}");
    background-size: 100% 90%;
    background-repeat: no-repeat;
    width: 85%;
    margin: 20px auto;
    cursor: pointer;
    height: 92%;
    border-radius: 8px;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.19);
`;

const CardTitleContainer = styled.div`
    position: absolute;
    bottom: 5%;
    background-color: white;
    width: 85%;
    padding-top: 5px;
    font-size: 1.25rem;
`;

const CardTitle = styled.p`
    width: 90%;
    margin: 0 auto;
`;

const CardRating = styled.div`
    position: absolute;
    text-align: center;
    top: 30px;
    left: 10%;
    background-color: white;
    border: 1px solid black;
    padding: 5px;
    width: 20px;
    border-radius: 50%;
`;

function Movie({ title, poster, release, description, rating, count }) {

    const [modal, setModal] = useState(false);

    function showModal() {
        setModal(true);
    };

    function hideModal() {
        setModal(false);
    };

    return (
        <>
            <CardContainer onClick={showModal}>
                <Card image={poster}>
                    <CardRating>{rating}</CardRating>
                    <CardTitleContainer>
                        <CardTitle>{title}</CardTitle>
                    </CardTitleContainer>
                </Card>
            </CardContainer>
            <Modal show={modal} close={hideModal} title={title} poster={poster} release={release}
                description={description} rating={rating} count={count} />
        </>
    )
}

export default Movie;