// Extract the "What a beautiful day!" message into a new component called Message and render it within the Hello component.

import React from "react";

export class Message extends React.Component {
    render() {
        return  <p> What a beautiful day! </p>
    }
}