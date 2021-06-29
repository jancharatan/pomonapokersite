import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const Person = ({ name, hometown, year, major, finishes, image }) => (
    <div style={{display: "flex", width: "100%", backgroundColor: "white", justifyContent: "space-between"}}>
        <div>
            <div className="person-font-large" style={{marginLeft: '10px', marginTop: '10px', fontFamily: 'Work Sans', fontWeight: '900'}}>
                {name}
            </div>
            <div className="person-font-small" style={{fontFamily: 'Work Sans', fontWeight: '300', marginLeft: '10px'}}>
                Year: {year}
            </div>
            <div className="person-font-small" style={{fontFamily: 'Work Sans', fontWeight: '300', marginLeft: '10px'}}>
                Major: {major}
            </div>
            <div className="person-font-small" style={{fontFamily: 'Work Sans', fontWeight: '300', marginLeft: '10px'}}>
                Hometown: {hometown}
            </div>
            <div className="person-font-small" style={{fontFamily: 'Work Sans', fontWeight: '300', marginLeft: '10px'}}>
                Finishes: {finishes}
            </div>
        </div>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '15px'}}>
            <img src={image} alt="playerpic" className="player-pic" />
        </div>
    </div>
)

Person.propTypes = {
    name: PropTypes.string.isRequired,
    hometown: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    major: PropTypes.string.isRequired,
    finishes: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

export default Person;
