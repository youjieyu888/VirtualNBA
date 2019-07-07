import React, {Component} from 'react';
import nba from 'nba';
import {Profile} from './Profile'
import {ShotChart} from "./ShotChart"
import {CountSlider} from "./CountSlider"
import {Row, Col} from "antd"
import {DataViewContainers} from './DataViewContainers'


export class Main extends Component {

    state = {
        playerId: nba.findPlayer('Stephen Curry').playerId,
        playerInfo: {},
    }

    componentDidMount() {
        nba.stats.playerInfo({ PlayerID: this.state.playerId })
            .then((info) => {
                const playerInfo = Object.assign(info.commonPlayerInfo[0], info.playerHeadlineStats[0]);
                // console.log('playerInfo', playerInfo);
                this.setState({ playerInfo });
            })
            .catch((e) => console.log(e))
    }


    render() {
        return (
            <div className = "main">
                <Profile playerInfo = {this.state.playerInfo}/>
                <DataViewContainers playerId={this.state.playerId}/>
            </div>
        );
    }
}