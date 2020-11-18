const initialState = {
    isLoaded: false,
    items: null
}

const books = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_BOOKS':
            return {
                ...state,
                isLoaded: true,
                items: action.payload
            }
        
        case 'IS_LOADED':
            return {
                ...state,
                isLoaded: false
            }
        default:
            return state
    }
}

export default books