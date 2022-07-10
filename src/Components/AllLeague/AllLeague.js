import "./AllLeague.css";
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const AllLeague = (props) => {
<<<<<<< HEAD
    const {id, strSport, strFormerTeam, strTeamBadge} = props.formerteam;
=======
    const {idTeam, strSport, strTeam, strTeamBadge} = props.team;
>>>>>>> 25176c5d9f4292526ff930c75f9b61725d129707

    return (
        <div>
            <Container>
                <Row>
                    <Col id="CardsCol">
                        <Card id="cards">
<<<<<<< HEAD
                            <Card.Img id="CardImg" variant="top" src={strTeamBadge} alt="Image not found / Api changed to *Patreon*"/>
                            <Card.Body>
                            <Card.Title>{strFormerTeam}</Card.Title>
                            <Card.Text id="cText">Sports type: {strSport}</Card.Text>
                            <Link to={`/SingleLeague/${id}`}> <Button variant="primary">
=======
                            <Card.Img id="CardImg" variant="top" src={strTeamBadge} alt="Image not found"/>
                            <Card.Body>
                            <Card.Title>{strTeam}</Card.Title>
                            <Card.Text>Sports type: {strSport}</Card.Text>
                            <Link to={`/SingleLeague/${idTeam}`}> <Button variant="primary">
>>>>>>> 25176c5d9f4292526ff930c75f9b61725d129707
                                Explore<FontAwesomeIcon id="icon" icon={faArrowRight} /></Button>
                            </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>

    );
};

export default AllLeague;