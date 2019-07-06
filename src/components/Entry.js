import React, {Component} from 'react';

export function Entry(props){
    return (
        <div>
            <div className="profile-entry">
                <div className="profile-entry-left">{props.name}</div>
                <div className="profile-entry-right">{props.value}</div>
            </div>
        </div>
    );
}