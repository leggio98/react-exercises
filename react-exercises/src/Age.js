// Extract the "Your age is " message into a new component called Age and render it within the Welcome component.
// Pass to the Age component the age prop that Welcome is receiving from the App component.


import React from "react";

export class Age extends React.Component{
    render () {
        return <p>
            Your age is
            {(this.props.value >= 18 && this.props.value <= 65)
             ? this.props.value
             : ' not between 18 and 65'}
             </p>
    }
}

Age.defaultProps = {
    //value: "not specified",
}