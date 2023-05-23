let CompB = (props) => {

    return <div>
        <h3>Component B</h3>
        <pre>{JSON.stringify(props)}</pre>
        <h3>Employee Id: {props.eid}</h3>
        <h3>Employee Name:{props.ename}</h3>
        <h3>Location:{props.eloc[2]}</h3>
    </div>
}

export default CompB