import React from 'react'
import CompB from './CompB'
const CompA = () => {
    let eName = "Rahul"
    let eSal = 45000
    return (
        <div>
            <h1>Component A:</h1>
            <hr />
            <CompB name={eName} sal={eSal} />
        </div>
    )
}

export default CompA