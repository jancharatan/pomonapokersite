import React from 'react';
import { bodyLinkText } from '../data/cssdata';

const SponsorPane = ({ companyName, image, description, link }) => (
    <div style={{position: 'relative', width: '350px', height: '280px', background: '#14375c', borderRadius: '10px', paddingLeft: '20px', paddingRight: '20px', paddingTop: '10px', marginRight: '20px', marginBottom: '20px'}}>
        <div style={{fontFamily: 'Work Sans', fontSize: '18pt', fontWeight: '900', color: 'white'}}>
            {companyName}
        </div>
        <div style={{fontFamily: 'Work Sans', fontSize: '12pt', fontWeight: '300', color: 'white'}}>
            {description} <a style={bodyLinkText} href={link}>Learn more!</a>
        </div>
        <div style={{position: 'absolute', bottom: '20px', width: '310px', height: '80px', background: 'white', borderRadius: '10px'}}>
            <img style={{display: 'block', margin: '0 auto'}} src={image} alt="sponsorLogo" />
        </div>
    </div>
);

export default SponsorPane;