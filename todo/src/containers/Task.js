import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as ListActions from '../actions/ListActions'
import List from '../components/List'

class Task extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const TaskItems = this.props.task.map((item, id) => {
            return (
                <li key={id}>
                    {item}
                </li>
            )
        })
        return (
            <div>
                <List addItem={this.props.actions.addToList} />
                <h2>Task Items</h2>
                <ol>
                    {TaskItems}
                </ol>
            </div>
        )
    }
}
// More information about the implementation pattern below can be found at the link below
// https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options

// Subscribes the container component to any changes in Redux-managed state
// the state being mapped to props is the redux state
function mapStateToProps(state, props) {
    return {
        task: state.task
    };
}

// Changes in our program will be reflected when new actions are dispatched
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(TaskActions, dispatch)
    }
}

// typically the lines below would be condensed into :
// export default connect(mapStateToProps, mapDispatchToProps)(Cart)

// returns a function wrapper that we need to pass the component into
const wrapperFunction = connect(mapStateToProps, mapDispatchToProps)

// wraps the Cart component with the store connection configured above
const wrappedComponent = wrapperFunction(Cart)

export default wrappedComponen