import React from 'react';
import Header from '../components/Header';
import TeamViewer from '../components/TeamViewer';

const Team = () => (
    <div>
        <Header />
        <div className="App-body"> 
            <div className="Info-text"> 
                During the 2020-2021 season, we sent our first ever competitive team to participate in the Intercollegiate Poker 
                Association's league. Our team finished in 5th place out of the 13 teams that competed. Check out the members
                of that team below! In future years, we intend to send a team to compete in the same league; once we make our
                team for the 2021-22 season, it will be posted here!
            </div>
            <TeamViewer year="2020-21" />
        </div>
    </div>
    
)

export default Team;