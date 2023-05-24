let CompB = (x) => {

    return <div>
        <h3>Component B</h3>
        <pre>{JSON.stringify(x)}</pre>
        <h3>Message: {x.props1}</h3>
    </div>
}

export default CompB