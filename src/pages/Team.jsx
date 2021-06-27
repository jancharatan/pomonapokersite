import React from 'react';
import ParticleBackground from '../components/ParticleBackground';
import Header from '../components/Header';
import TeamViewer from '../components/TeamViewer';
import { bodyText, headerText, topItem, bodyLinkText } from '../data/cssdata';

const Team = () => (
    <div>
        <ParticleBackground />
        <Header />
        <div style={Object.assign({}, headerText, topItem)}>
            Leadership Team ✏️
        </div>
        <div style={bodyText}>
            Our leadership team is made up of Kevin Wu, (PO '23, President), Jan Charatan (PO '23, Vice President) and Owen
            Sherry (PO '23, Chief Operating Officer). If you're interested in joining the leadership team, please reach out!
        </div>
        <div style={Object.assign({}, headerText, topItem)}>
            Competitive Team 🏆
        </div>
        <div style={bodyText}>
            During the 2020-2021 season, we sent our first ever competitive team to participate in the <a style={bodyLinkText} 
            href="https://pokeripa.com">Intercollegiate Poker Association</a>'s league. Our team finished in 5th place out of 
            the 13 teams that competed. Check out the members of that team below! In future years, we intend to send a team 
            to compete in the same league; once we make our team for the 2021-22 season, it will be posted here!
        </div>
        <div style={{marginLeft: '4vw', marginRight: '4vw'}}> 
            <TeamViewer year="2020-21" />
        </div>
    </div>
    
)

export default Team;