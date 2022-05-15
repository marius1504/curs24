import {Bio} from "./Bio";
import React from 'react';

export class Badge extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName : props.firstName,
            lastName : props.lastName,
            birthday: props.birthday,
            description: props.description,
            hobbies: props.hobbies,
            avatarImage : props.avatarImage
        };
    }
    render () {
        return (
            <div
                style={{
                    border: "1px solid black",
                    width: "500px",
                    borderRadius: "8px",
                    padding: "8px",
                    display: "flex",
                    height: "200px",
                    margin: "10px"
                }}
            >
                <div style={{ width: "100%" }}>
                    <h4>{this.state.firstName}</h4>
                    <h5>{this.state.lastName}</h5>
                    <h6> <Bio
                        birthday = {this.state.birthday}
                        description = {this.state.description}
                        hobbies = {this.state.hobbies}
                    ></Bio></h6>
                </div>
                <img src={this.state.avatarImage} height="64px" />
            </div>
        );
    }
}