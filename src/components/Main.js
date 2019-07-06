import React, {Component} from 'react';
import nba from 'nba';
import {Profile} from './Profile'
import {ShotChart} from "./ShotChart"

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
                <ShotChart playerId={this.state.playerId}/>
            </div>
        );
    }
}