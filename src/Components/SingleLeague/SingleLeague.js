import "./SingleLeague.css";
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFlag, faFutbol, faMapMarkerAlt, faMars, faUsers, faVenus } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";


const SingleLeague = () => {

    const {idTeam} = useParams();
    const [team, setTeam] = useState([]);

    useEffect(()=>{
       fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`)
       .then(res=>res.json())
       .then(data=>setTeam(data.teams[0]))
     }, [idTeam]);


    const {strTeam, strTeamFanart4, strTeamBadge, strSport, strCountry,intFormedYear, strStadiumLocation,
        strGender, strTeamJersey, strDescriptionEN, strFacebook, strTwitter, strYoutube, 
        } = team || " ";
    
    //css- not in my control.
    const HeaderLogo = { width:"6rem", textAlign:"center", position:"absolute", zIndex:"1", margin:" 3% 0 0 45% "}
    const briefDetails ={backgroundColor: "#1827b3", borderRadius: ".6rem",  margin: "1rem 0 -1rem 0", height: "11rem",color: "#fff" }
    const StadiumLocation = {zIndex: "2", position:"absolute", margin:" 8% 0 0 80% ", color:"#fff"};

    return (
        <div>
            <div>
                <img style={HeaderLogo} src={strTeamBadge} alt=""/>
                <h5 style={StadiumLocation}>{strStadiumLocation}</h5>
                <img id="HeaderImg" src={strTeamFanart4} alt="stadium"/>
            </div>
            <Container>
                <Container id="briefDetails" style={briefDetails}>
                    <Row>
                        <Col id="briefDetails_Col">
                            <h5><FontAwesomeIcon icon={faUsers}/>&nbsp; {strTeam}</h5>
                            <p><FontAwesomeIcon icon={faMapMarkerAlt}/>&nbsp; Founded: {intFormedYear}</p>
                            <p><FontAwesomeIcon icon={faFlag}/>&nbsp; Country: {strCountry}</p>
                            <p><FontAwesomeIcon icon={faFutbol}/>&nbsp; Sports type: {strSport}</p>
                            <p><FontAwesomeIcon icon={faMars}/>&nbsp; Gender: {strGender}</p>
                        </Col>
                        <Col>
                            <img id="briefDetails_img" src={strTeamJersey} alt=""/>
                        </Col>
                    </Row>
                </Container>
                
                {/* description */}
                <p id="description">{strDescriptionEN}</p>

                {/* social links */}
                <p id="Icons">
                    <span id="Icons_social"><Link to={strFacebook}><FontAwesomeIcon  icon={faFacebook}/></Link></span>
                    <span id="Icons_social"><Link to={strTwitter}><FontAwesomeIcon  icon={faTwitter}/></Link></span>
                    <span id="Icons_social"><Link to={strYoutube}><FontAwesomeIcon icon={faInstagram}/></Link></span>
                </p>
            </Container>
        </div>
    );
};

export default SingleLeague;