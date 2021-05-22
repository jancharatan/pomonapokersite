import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const Person = ({ name, hometown, year, major, finishes, image }) => (
    <div className="Team-center">
        <div>
            <div className="Person-header">
                {name}
            </div>
            <div className="Person-text">
                Year: {year}
            </div>
            <div className="Person-text">
                Major: {major}
            </div>
            <div className="Person-text">
                Hometown: {hometown}
            </div>
            <div className="Person-text">
                Finishes: {finishes}
            </div>
        </div>
        <div className="Team-picture">
            <img src={image} alt="playerpic" className="Player-pic" />
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
