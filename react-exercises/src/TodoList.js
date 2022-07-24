import React from "react";

class TodoList extends React.Component {
    state = {
        items: ['string1', 'string2', 'string3'],
        value: '',
    }

    saveInput = (item) => {
        this.setState({value: item.target.value})
    };

    addItem = () => {
        this.setState((prevState, props) => ({
            items: [...prevState.items, prevState.value],
            value: '',
        }));
    }
    resetItemsList = () => {
        this.setState({
            items: []
        })
    }
    removeCurrentLi = (event) => {
        let tempArray = [...this.state.items];
        tempArray.splice(event,1);
        this.setState({items: tempArray})
    }
    render() {
        return (
            <div>
         
                    {this.props.render(this.state.items)}
           
                <input
                type='text'
                onChange = {this.saveInput}
                value = {this.state.value}
                />
                <button onClick={this.addItem}>Add item</button>
                <button onClick={this.resetItemsList}>Reset List</button>
            </div>
        )
    }
}

export default TodoList


/*  <ul>
{this.state.items.map((item, index) =>
    <li key={item + index}> {item}
    <button onClick={() => {item.splice(index,1)};
this.setState({ items: items}) }>Remove</button>
    </li>
    )}
</ul> */