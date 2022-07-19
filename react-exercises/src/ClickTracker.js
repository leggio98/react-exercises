/* Create a ClickTracker component that renders three buttons.
 Implement a single event handler for all three buttons, and track
  of which button was pressed last. Show the last button that was pressed
  in an h1 tag within the ClickTracker component. Tip: you can use the event
   object to access the target property of the event. */

import React from "react";

export class ClickTracker extends React.Component {
    state = {
        lastButtonClicked: 'Nessun bottone è stato cliccato!'
    }
    handleTrack = (event) => {
        this.setState({
            lastButtonClicked: event.target.name
        })
    }
    render () {
        return ( <div>
            <button name="First" onClick={this.handleTrack}> First</button>
            <button name="Second" onClick={this.handleTrack}> Second</button>
            <button name="Third" onClick={this.handleTrack}> Three</button>
            <h1>Last button clicked: {this.state.lastButtonClicked}</h1>
        </div>

        )
    }
}