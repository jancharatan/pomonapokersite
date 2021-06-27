import React from 'react';
import ParticleBackground from '../components/ParticleBackground';
import Header from '../components/Header';
import { bodyText, headerText, topItem, bodyLinkText } from '../data/cssdata';

const About = () => (
    <div style={{marginBottom: '50px'}}>
        <ParticleBackground />
        <Header />
        <div style={Object.assign({}, headerText, topItem)}>
            Who Are We? 🤔
        </div>
        <div style={bodyText}>
            The Claremont Poker Club is a club at <a style={bodyLinkText} href="https://www.claremont.edu">Claremont Colleges</a> in Claremont, California 
            that creates a community for poker enthusiasts at the 5Cs. The goals of the club are to encourage a love of the game of poker, to offer a way 
            for students to better their game and to promote skills like risk assessment and financial literacy. To this end, the club hosts casual games 
            throughout the year, as well as larger tournaments, guest speakers, poker workshops and career events. Additionally, the club sends players to 
            various events such as the <a style={bodyLinkText} href="https://www.pokercsop.com">Collegiate Series of Poker</a> and has a competitive team 
            that competes in the <a style={bodyLinkText} href="https://pokeripa.com">Intercollegiate Poker Association</a>'s league.
        </div>
        <div style={Object.assign({}, headerText, topItem)}>
            Who Can I Contact? 📲
        </div>
        <div style={bodyText}> 
            The best way to get in contact with us is to reach out to our president, Kevin Wu, at <a style={bodyLinkText} href="mailto:kywa2019@mymail.pomona.edu"> 
            kywa2019 [at] mymail [dot] pomona [dot] edu</a> or via our <a style={bodyLinkText} href="https://www.facebook.com/ClaremontPoker/">Facebook page</a>. 
            We are always looking for sponsorship opportunities and partnerships with clubs at other colleges and universities. If you have a reason to reach out,
            we're probably interested!
        </div>
        <div style={Object.assign({}, headerText, topItem)}>
            How Do I Join? 👥
        </div>
        <div style={bodyText}> 
            If you are a Claremont Colleges student interested in joining our club, please fill out <a style={bodyLinkText} href="https://forms.gle/z6as86yhpXuy4uFB9">
            this Google form</a> and join our club page on <a style={bodyLinkText} href="https://www.pomona.edu/administration/campus-center/services-programs/engage-5c-and-pomona-clubs">
            Engage</a>. It's not necessary that you're a poker pro; we have plenty of ways for beginners to get involved! Joining the club is not a binding commitment—it'll 
            justensure that you'll be looped in when we announce all the cool events that we host. If you're interested in joining our leadership team, please
            reach out to us.
        </div>
    </div> 
);

export default About;