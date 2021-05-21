import React, { useState } from 'react';
import '../App.css';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import Person from '../components/Person';
import { Teams } from '../data/teams';
import PropTypes from 'prop-types';

const TeamViewer = ({ year }) => {
    const [showTeam, setShowTeam] = useState(false);
    const [currPlayer, setCurrPlayer] = useState(0);
    const team = Teams[year];
    const subtractCurr = () => {
        if (currPlayer !== 0) {
            setCurrPlayer(currPlayer - 1);
        }
    }
    const addCurr = () => {
        if (currPlayer !== team.length - 1) {
            setCurrPlayer(currPlayer + 1);
        }
    }
    return (
    <div>
        <button onClick={() => setShowTeam(!showTeam)} className="TeamViewer-wrapper">
            <div className="TeamViewer-bar">
                {showTeam ?  <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
            </div>
            <div className="TeamViewer-bar">
                {year}
            </div>
        </button>
        {
            showTeam ? 
            <div className="Team-wrapper">
                <button onClick={() => subtractCurr()} className={`Team-sidebar ${currPlayer !== 0 ? "Hover-sidebar" : ""}`}>
                    {currPlayer === 0 ? <div /> : <KeyboardArrowLeftIcon />}
                </button>
                <div className="Team-center">
                    <Person 
                        name={team[currPlayer].name} 
                        year={team[currPlayer].year} 
                        major={team[currPlayer].major} 
                        hometown={team[currPlayer].hometown} 
                        finishes={team[currPlayer].finishes} 
                        image={team[currPlayer].image}
                    />
                </div>
                <button onClick={() => addCurr()} className={`Team-sidebar ${currPlayer !== team.length - 1 ? "Hover-sidebar" : ""}`}>
                    {currPlayer === team.length - 1 ? <div /> : <KeyboardArrowRightIcon />}
                </button>
            </div> :
            <div />
        }
    </div>
    
    )
};

TeamViewer.propTypes = {
    year: PropTypes.string.isRequired,
}


export default TeamViewer;