//Create an InteractiveWelcome component that renders an input tag and the Welcome component. Pass the current content
// of the input tag to the name prop of the Welcome component. The input tag should be a controlled component.

import React from "react";
import { Welcome } from "./Welcome";

export class InteractiveWelcome extends React.Component {
    state = {
        name: ''
    }

    change = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    render() {
        return (
            <div>
                <input
                onChange={this.change}
                value={this.state.name}
                />
                <Welcome name={this.state.name} />
            </div>
        )
    }
}