import React, { Component } from 'react'

export class Emp extends Component {
    render() {
        return (
            <div>
                <h1>Employee Component</h1>
                <pre>{JSON.stringify(this.props)}</pre>
                <h3>Message: {this.props.p1}</h3>
                <h3>Message: {this.props.p2}</h3>
                <hr />
                <h4>User Name: {this.props.user.name}</h4>
                <h4>User Name: {this.props.user.loc}</h4>
            </div>
        )
    }
}

export default Emp