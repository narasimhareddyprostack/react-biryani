import React from 'react'
import CompD from './CompD'
const CompC = (props) => {
    return (
        <div>
            <h1>Component C:</h1>
            <pre>{JSON.stringify(props)}</pre>
            <hr />
            <CompD name={props.name} />
        </div>
    )
}

export default CompC