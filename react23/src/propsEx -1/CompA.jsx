import CompB from './CompB'
let CompA = () => {
    let id = 101
    let name = "Rahul"

    return <div>
        <h1>Component A</h1>
        <hr />
        <CompB props1={"GM"} props2={"GA"} />
    </div>
}

export default CompA