import React, {Component} from 'react';
import nba from 'nba';
import {Profile} from './Profile'
import {ShotChart} from "./ShotChart"
import {CountSlider} from "./CountSlider"
import {Row, Col} from "antd"
import {DataViewContainers} from './DataViewContainers'
import {SearchBar} from "./SearchBar";
import { DEFAULT_PLAYER_INFO } from '../constants';

export class Main extends Component {

    state = {
        // playerId: nba.findPlayer('Stephen Curry').playerId,
        // playerInfo: {},
        playerInfo: {
            fullName : DEFAULT_PLAYER_INFO
        }
    }

    componentDidMount() {
        this.loadPlayerInfo(this.state.playerInfo.fullName);
    }

    handleSelectedPlayer = (playerName) => {
        this.loadPlayerInfo(playerName);
    }

    loadPlayerInfo = (playerName) => {
        nba.stats.playerInfo({ PlayerID: nba.findPlayer(playerName).playerId }).then((info) => {
            const playerInfo = Object.assign(info.commonPlayerInfo[0], info.playerHeadlineStats[0]);
            this.setState({ playerInfo });
        });
    }

    render() {
        return (
            <div className = "main">
                <SearchBar handleSelectedPlayer={this.handleSelectedPlayer}/>
                <div className = "player">
                    <Profile playerInfo = {this.state.playerInfo}/>
                    <DataViewContainers playerId={this.state.playerInfo.playerId}/>
                </div>
            </div>
        );
    }
}