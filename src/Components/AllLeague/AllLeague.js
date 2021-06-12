import "./AllLeague.css";
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const AllLeague = (props) => {
    const {idTeam, strSport, strTeam, strTeamBadge} = props.team;

    return (
        <div>
            <Container>
                <Row>
                    <Col id="CardsCol">
                        <Card id="cards">
                            <Card.Img id="CardImg" variant="top" src={strTeamBadge} alt="Image not found"/>
                            <Card.Body>
                            <Card.Title>{strTeam}</Card.Title>
                            <Card.Text>Sports type: {strSport}</Card.Text>
                            <Link to={`/SingleLeague/${idTeam}`}> <Button variant="primary">
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