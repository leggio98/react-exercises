// Write a Hello class components that renders the "Hello, World!" message within an h1 tag.
import React from "react" ;

export class Hello extends React.Component {
    render () {
        return <div>
            <h1>Hello, World!</h1>
            <p>What a beautiful day!</p>
        </div>
    }
}