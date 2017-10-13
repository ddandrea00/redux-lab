import React, { Component } from 'react'

class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listItems: [
                "Take Out Trash",
                "Learn Redux",
                "Cry Myself to Sleep",
                "Time Warp",
                "Jump Rope",
                "Eat Chicken Nuggets"
            ]
        }
    }

    render() {
        const ListItems = this.state.ListItems.map((item, id) => {
            return (
                <li key={id}>
                    {item}
                    <button onClick={() => this.props.addItem(item)}>+</button>
                </li>
            )
        })
        return (
            <div>
                <h2>ToDo List</h2>
                <ul>
                    {ListItems}
                </ul>
            </div>
        )
    }
}

export default List