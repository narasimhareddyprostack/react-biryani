import CompB from './CompB'
let CompA = () => {
    let id = 101
    let name = "Rahul"
    let loc = ['Wayand', 'NewDelhi', "Bangalore"]
    return <div>
        <h1>Component A</h1>
        <hr />
        <CompB eid={id} ename={name} eloc={loc} />
    </div>
}

export default CompA