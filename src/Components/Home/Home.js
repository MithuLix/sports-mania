import React from 'react';
import './Home.css';
import { useEffect, useState } from 'react';
import AllLeague from '../AllLeague/AllLeague';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../Header/Header';

const Home = () => {
    const [teams, setTeams] = useState([]);



    useEffect(() => {
        fetch( `https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4328`)
        .then(res => res.json())
        .then(data => setTeams(data.teams.slice(0, 15)))
        .catch((err) => console.log(err))
    }, []);


    return (
        <div>
            <Header></Header>
            <Container>
                <Row className="justify-content-center">
                    <Col id="AllLeagueCss" md={8}>
                    {
                        teams.map(team => (<AllLeague key={team.idTeam} team={team}></AllLeague>))
                    }
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;