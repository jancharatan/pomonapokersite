import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const Person = ({ name, hometown, year, major, finishes, image }) => (
    <div style={{display: "flex", width: "100%", backgroundColor: "white", justifyContent: "space-between"}}>
        <div>
            <div style={{marginLeft: '10px', marginTop: '10px', fontSize: '18pt', fontFamily: 'Work Sans', fontWeight: '900'}}>
                {name}
            </div>
            <div style={{fontSize: '12pt', fontFamily: 'Work Sans', fontWeight: '300', marginLeft: '10px'}}>
                Year: {year}
            </div>
            <div style={{fontSize: '12pt', fontFamily: 'Work Sans', fontWeight: '300', marginLeft: '10px'}}>
                Major: {major}
            </div>
            <div style={{fontSize: '12pt', fontFamily: 'Work Sans', fontWeight: '300', marginLeft: '10px'}}>
                Hometown: {hometown}
            </div>
            <div style={{fontSize: '12pt', fontFamily: 'Work Sans', fontWeight: '300', marginLeft: '10px'}}>
                Finishes: {finishes}
            </div>
        </div>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '15px'}}>
            <img src={image} alt="playerpic" style={{width: '120px', height: '120px'}} />
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
