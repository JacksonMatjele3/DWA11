import store from "./store"

store.dispatch({
    type: "ADD",
    payload: {
        description:"BUG1"
    }
})
const unsubscribe = subscribe(() => {
    console.log("store has changed !",store.getState())
})
store.dispath({
    type: "SUBTRACT",
    payload: { count :1}
})
unsubscribe
console.log(store.getState())