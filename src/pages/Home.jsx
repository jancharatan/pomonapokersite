import React from 'react';
import Header from '../components/Header';

const Home = () => (
    <div>
        <Header />
        <div className="App-body"> 
            The Pomona Poker Club is a club at <a href="https://www.pomona.edu">Pomona College</a> in Claremont, California 
            that creates a community for Poker enthusiasts at the Claremont Colleges. The goals of the club is to encourage 
            a love of the game of poker and to offer a way for students to better their game. To this end, the club hosts 
            casual games throughout the year, as well as larger tournaments, guest speakers and poker workshops. Additionally, 
            the club has a <a href="/#/team">competitive team</a> that competes in the <a href="https://pokeripa.com">
            Intercollegiate Poker Association</a>'s league. The club also sends players to various events such as the <a href="https://www.pokercsop.com">Collegiate Series of Poker</a>. 
            The president of the club is Kevin Wu (Econ '23) and the vice president is Jan Charatan (CS '23). This website was built using React.js by Jan Charatan.
        </div>
    </div>
    
)

export default Home;