import React from 'react';
import './Home.css';
import { useEffect, useState } from 'react';
import AllLeague from '../AllLeague/AllLeague';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../Header/Header';

const Home = () => {
<<<<<<< HEAD
    const [formerteams, setFormerteams] = useState([]);
=======
    const [teams, setTeams] = useState([]);
>>>>>>> 25176c5d9f4292526ff930c75f9b61725d129707



    useEffect(() => {
<<<<<<< HEAD
        fetch( `https://www.thesportsdb.com/api/v1/json/2/lookupformerteams.php?id=34147178`)
        .then(res => res.json())
        .then(data => setFormerteams(data.formerteams.slice(0, 15)))
=======
        fetch( `https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4328`)
        .then(res => res.json())
        .then(data => setTeams(data.teams.slice(0, 15)))
>>>>>>> 25176c5d9f4292526ff930c75f9b61725d129707
        .catch((err) => console.log(err))
    }, []);


    return (
        <div>
            <Header></Header>
            <Container>
                <Row className="justify-content-center">
                    <Col id="AllLeagueCss" md={8}>
                    {
<<<<<<< HEAD
                        formerteams.map(formerteam => (<AllLeague key={formerteam.id} formerteam={formerteam}></AllLeague>))
=======
                        teams.map(team => (<AllLeague key={team.idTeam} team={team}></AllLeague>))
>>>>>>> 25176c5d9f4292526ff930c75f9b61725d129707
                    }
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;