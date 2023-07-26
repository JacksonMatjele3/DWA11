export const reducer = (state = [], action) => {
    if (action.type === "ADD"){
        return [
            ...state,
            {
                count: ++lastCount,
                description: action.payload.description,
                resolved: false
            
            }]}else if (action.type === "SUBTRACT") {
            return state.Filter(bug => bug.count !== action.payload.count)
            } else if (action.type === "RESET") {
                return state
        }
    
}