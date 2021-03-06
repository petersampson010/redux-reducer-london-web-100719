export function manageFriends(state, action){
    switch (action.type) {
        case "ADD_FRIEND":
            return {friends: [...state.friends, action.friend]}
        case "REMOVE_FRIEND":
            return {friends: [state.friends.filter(x => x.id!==action.id)][0]}
        default:
            return state
    }
}
