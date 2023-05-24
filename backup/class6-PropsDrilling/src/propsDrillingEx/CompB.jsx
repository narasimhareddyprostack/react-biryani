import React from 'react'
import CompC from './CompC'
const CompB = (props) => {
    return (
        <div>
            <h1>Component B:</h1>
            <pre>{JSON.stringify(props)}</pre>
            <hr />
            <CompC name={props.name} specialSal={props.sal} />
        </div>
    )
}

export default CompB