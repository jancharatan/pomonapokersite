import React from 'react';
import ParticleBackground from '../components/ParticleBackground';
import { Button } from 'react-bootstrap';


const Home = () => (
    <div>
        <ParticleBackground />
        <div style={{position: 'absolute', top: '30px'}}>
            <div style={{marginLeft: '4vw', marginRight: '4vw', display: 'flex', flexDirection: 'row'}}>
                <div style={{fontFamily: 'Work Sans', fontSize: '7vw', fontWeight: '900', color: 'white'}}>
                    Claremont Poker Club ♠️
                </div>
            </div>
            <div style={{fontFamily: 'Work Sans', fontSize: '3.5vw', marginLeft: '4vw', marginRight: '4vw', fontWeight: '300', color: 'white'}}>
                A club at the Claremont Colleges dedicated to teaching risk assessment and financial literacy through the beautiful game of poker.
            </div>
            <div style={{marginLeft: '4vw', marginRight: '4vw', marginTop: '4vw'}}>
                <Button onClick={() => window.location.assign("/#/about")} variant="light" size="sm" style={{fontSize: "3vw", width: "18vw", height: "9vw", fontFamily: 'Work Sans'}}>
                    About
                </Button>
                <Button onClick={() => window.location.assign("/#/team")} variant="light" size="sm" style={{fontSize: "3vw", marginLeft: "4vw", width: "18vw", height: "9vw", fontFamily: 'Work Sans'}}>
                    Team
                </Button>
                <Button onClick={() => window.location.assign("/#/sponsors")} variant="light" size="sm" style={{fontSize: "3vw", marginLeft: "4vw", width: "18vw", height: "9vw", fontFamily: 'Work Sans'}}>
                    Sponsors
                </Button>
            </div>
        </div> 
    </div>   
)

export default Home;