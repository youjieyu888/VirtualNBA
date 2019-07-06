import React, {Component} from 'react';
import {PROFILE_PIC_URL_PREFIX, TEAM_PIC_URL_PREFIX} from "../constants"
import {Entry} from "./Entry"

export class Profile extends Component {

    render() {
        const {
            teamAbbreviation,
            teamCity,
            teamName,
            playerName,
            height,
            weight,
            playerId,
            pts, reb, ast, pie,
        } = this.props.playerInfo
        console.log(playerId)
        return (
            <div className="profile">
                <div className="profile-entry player-name">{`${playerName}`}</div>
                <img
                    className="profile-pic"
                    src={`${PROFILE_PIC_URL_PREFIX}/${playerId}.png`}
                    alt="Profile"
                />
                <div className="profile-entry">
                    <div className="profile-entry-left">Team</div>
                    <div className="profile-entry-right">{`${teamCity} ${teamName}`}</div>
                </div>
                <img
                    className="team-logo"
                    src={`${TEAM_PIC_URL_PREFIX}/${teamAbbreviation}_logo.svg`}
                    alt="Team"
                />
                <Entry name = "Height" value = {height}/>
                <Entry name = "Weight" value = {weight}/>
                <Entry name = "PTS" value = {pts}/>
                <Entry name = "REB" value = {reb}/>
                <Entry name ="AST" value = {ast}/>
                <Entry name = "PIE" value = {pie}/>
            </div>
        );
    }
}
