//create action types
let GM = "GM"
let GN = "GN"
let gmAction = () => {
    console.log("Check Point - action ")
    return { type: GM }
}
let gnAction = () => {
    return { type: GN }
}
export { gmAction, gnAction, GM, GN }