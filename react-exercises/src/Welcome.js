// Create a Welcome class component that receives a name prop and renders the Welcome,
// {name}! message within a p tag. Render this component to you App component, passing it a name prop of your choosing.



import React from "react";

export class Welcome extends React.Component {

    render() {
        return <div>
            <p> Welcome, {this.props.name}!</p>
            <p> Your age is {this.props.age}</p>
        </div>
    }
}


Welcome.defaultProps = {
    name : "World",
    age: "not specified",
}