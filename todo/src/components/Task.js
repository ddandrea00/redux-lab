import React, { Component } from 'react'

class Task extends Component {
    constructor(props) {
        super(props)
        this.state = {
            taskItems: [
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
        const taskItems = this.state.taskItems.map((item, id) => {
            return (
                <li key={id}>
                    {item}
                    <button onClick={() => this.props.addItem(item)}>+</button>
                    <button onClick={() => this.props.removeItem(item)}>-</button>
                </li>
            )
        })
        return (
            <div>
                <h2>All Tasks</h2>
                <ul>
                    {taskItems}
                </ul>
            </div>
        )
    }
}

export default Task