import React from "react";

class TodoList extends React.Component {
    state = {
        items: ['string1', 'string2', 'string3']
    }

    saveInput = (item) => {
        this.setState({input: item.target.value})
    };

    addItem = () => {
        this.setState((prevState, props) => ({
            items: [...prevState.items, prevState.input]
        }))
    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.items.map((item, index) => 
                    <li key={item + index}> {item}</li>
                    )}
                </ul>
                <input 
                type='text'
                onChange = {this.saveInput}
                />
                <button onClick={this.addItem}>Add item</button>
            </div>
        )
    }
}

export default TodoList 