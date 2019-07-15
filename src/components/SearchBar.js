import React, {Component} from 'react';
import { Icon, Button, Input, AutoComplete } from 'antd';
import nba from 'nba';
import {PROFILE_PIC_URL_PREFIX} from "../constants"

const { Option } = AutoComplete;

export class SearchBar extends Component {

    state = {
        dataSource : []
    }

    onSelect = (name) => {
        this.props.handleSelectedPlayer(name)
    }

    handleSearch = (value) => {
        //console.log(value);
        // const players = nba.searchPlayers(value);
        //console.log(players);

        this.setState({
            dataSource: !value ?
                [] : nba.searchPlayers(value).map(player => ({
                    fullName: player.fullName,
                    playerId: player.playerId,
                }))
        })
    }


    render() {
        const { dataSource } = this.state;
        const options = dataSource.map((player) => (
            <Option key={player.fullName} value={player.fullName}  className="player-option">
                <img className="player-option-image"  src={`${PROFILE_PIC_URL_PREFIX}/${player.playerId}.png`}/>
                <span className="player-option-label">{player.fullName}</span>
            </Option>
        ));

        return (
            <AutoComplete
                className="search-bar"
                dataSource={options}
                onSelect={this.onSelect}
                onSearch={this.handleSearch}
                placeholder="Search NBA player"
                optionLabelProp="value"
            >
                <Input suffix={<Icon type="search" className="certain-category-icon" />} />
            </AutoComplete>
        );
    }
}
