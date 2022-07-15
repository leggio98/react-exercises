// Create a Welcome class component that receives a name prop and renders the Welcome,
// {name}! message within a p tag. Render this component to you App component, passing it a name prop of your choosing.



import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component {

    render() {
        return <div>
            <p> Welcome, {this.props.name}!</p>
            {this.props.value > 18 && <Age value={this.props.value}/>}
        </div>
    }
}


Welcome.defaultProps = {
    name : "World",
}