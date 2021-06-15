import styled from 'styled-components';
import moment from 'moment';
import './modal.css';

const ModalContainer = styled.div`
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    display: ${props => props.display}
`;

const ModalMain = styled.div`
    position: fixed;
    background: white;
    width: 40%;
    top: 50%;
    left: 50%;
    padding: 30px;
    transform: translate(-50%, -50%);
    text-align: left;
`;

const ModalTitle = styled.h1`
    font-size: 30px;
    margin: 0;
    margin-bottom: 20px;
`;

const ModalContent = styled.div`
    display: flex;
`;

const ModalImage = styled.img`
    height: 500px;
    flex: 50%;
`;

const ModalInfo = styled.div`
    margin-left: 20px;
    display: flex;
    flex-direction: column;
`;

const ModalRelease = styled.p`
    font-size: 20px;
    margin: 0;
    margin-bottom: 20px;
`;

const ModalSummary = styled.p`
    font-size: 20px;
    margin: 0;
    margin-bottom: 20px;
`;

const ModalRating = styled.p`
    font-size: 20px;
    margin: 0;
`;

function Modal({ show, close, title, poster, release, description, rating, count }) {

    const display = show ? "block" : "none";

    return (
        <ModalContainer display={display}>
            <ModalMain>
                <ModalTitle>{title}</ModalTitle>
                <div className="close" onClick={close}></div>
                <ModalContent>
                    <ModalImage src={poster} />
                    <ModalInfo>
                        <ModalRelease><span style={{ fontWeight: "bold" }}>Release date:</span> {moment(release).format('MMMM DD, YYYY')}</ModalRelease>
                        <ModalSummary>{description}</ModalSummary>
                        <ModalRating><span style={{ fontWeight: "bold" }}>{rating}</span> / 10 ({count} total votes)</ModalRating>
                    </ModalInfo>
                </ModalContent>
            </ModalMain>
        </ModalContainer >
    )
}

export default Modal;