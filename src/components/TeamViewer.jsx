import React, { useState } from 'react';
import '../App.css';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import Person from '../components/Person';
import { Teams } from '../data/teams';
import PropTypes from 'prop-types';
import { teamWrapper } from '../data/cssdata';

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
        <button onClick={() => setShowTeam(!showTeam)} style={Object.assign({}, {borderBottomLeftRadius: `${showTeam ? "0px" : "10px"}`, borderBottomRightRadius: `${showTeam ? "0px" : "10px"}`}, teamWrapper)}>
            <div style={{color: "white", fontSize: "30px", fontWeight: "bolder", verticalAlign: "center", paddingLeft: "10px", paddingRight: "10px", display: "flex", alignItems: "center"}}>
                {showTeam ?  <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
            </div>
            <div style={{color: "white", fontSize: "30px", fontWeight: "bolder", verticalAlign: "center", paddingLeft: "10px", paddingRight: "10px", display: "flex", alignItems: "center"}}>
                {year}
            </div>
        </button>
        {
            showTeam ? 
            <div style={{width: '100%', height: '150px', display: 'flex', flexDirection: 'row'}}>
                <button onClick={() => subtractCurr()} style={{borderBottomLeftRadius: '10px'}} className={`Team-sidebar ${currPlayer !== 0 ? "Hover-sidebar" : ""}`}>
                    {currPlayer === 0 ? <div /> : <KeyboardArrowLeftIcon />}
                </button>
                <div style={{display: "flex", width: "100%", backgroundColor: "darkgrey", justifyContent: "space-between"}}>
                    <Person 
                        name={team[currPlayer].name} 
                        year={team[currPlayer].year} 
                        major={team[currPlayer].major} 
                        hometown={team[currPlayer].hometown} 
                        finishes={team[currPlayer].finishes} 
                        image={team[currPlayer].image}
                    />
                </div>
                <button onClick={() => addCurr()} style={{borderBottomRightRadius: '10px'}} className={`Team-sidebar ${currPlayer !== team.length - 1 ? "Hover-sidebar" : ""}`}>
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