import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as ListActions from '../actions/ListActions'
import Task from '../components/Task'

class List extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const ListItems = this.props.list.map((item, id) => {
            return (
                <li key={id}>
                    {item}
                </li>
            )
        })
        return (
            <div>
                <Task addItem={this.props.actions.addToList} removeItem={this.props.actions.removeFromList} />
                <h2>Completed</h2>
                <ol>
                    {ListItems}
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
        list: state.list
    };
}

// Changes in our program will be reflected when new actions are dispatched
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(ListActions, dispatch)
    }
}

// typically the lines below would be condensed into :
// export default connect(mapStateToProps, mapDispatchToProps)(Cart)

// returns a function wrapper that we need to pass the component into
const wrapperFunction = connect(mapStateToProps, mapDispatchToProps)

// wraps the Cart component with the store connection configured above
const wrappedComponent = wrapperFunction(List)

export default wrappedComponent