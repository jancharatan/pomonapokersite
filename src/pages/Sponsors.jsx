import React from 'react';
import ParticleBackground from '../components/ParticleBackground';
import Header from '../components/Header';
import SponsorPane from '../components/SponsorPane';
import { sponsors } from '../data/sponsors';
import { bodyText, headerText, topItem, bodyLinkText } from '../data/cssdata';

const Sponsors = () => {
    
    return (
        <div style={{marginBottom: '50px'}}>
            <ParticleBackground />
            <Header />
            <div style={Object.assign({}, headerText, topItem)}>
                Current Sponsors 💸
            </div>
            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginLeft: '4vw', marginRight: '4vw', marginTop: '1vw'}}>
                {sponsors.map(sponsor => (<SponsorPane companyName={sponsor.companyName} image={sponsor.image} description={sponsor.description} link={sponsor.link} />))}
            </div>
            <div style={Object.assign({}, headerText, topItem)}>
                Sponsor Us? 🤝
            </div>
            <div style={bodyText}> 
                The Claremont Poker Club is currently looking for sponsors! If you represent a company and would be interested in 
                sponsoring our club, please reach out to our club president, Kevin Wu at <a style={bodyLinkText} href = "mailto:kywa2019@mymail.pomona.edu"> kywa2019 [at] mymail 
                [dot] pomona [dot] edu</a>. Companies that sponsor our club will be featured on this page, will be advertised at our
                events and will be able to use our events as a way to recruit, among other things. 
            </div>
        </div>
    );
};

export default Sponsors;