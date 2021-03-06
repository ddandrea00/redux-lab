export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [...state, action.item]

        case 'REMOVE_ITEM':
            return [...state, action.item]

        default:
            return state
    }
}