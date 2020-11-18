const initialState = {
    totalCount: 0,
    totalPrice: 0,
    items: []
}

const getTotalPrice = (items) => {
    return items.reduce((sum, book) => sum + book.price, 0)
}

const getTotalCount = (items) => {
    return items.length + 1
}

const cart = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_BOOK_TO_CART':
            const currentBookItems = !state.items[action.payload.id] ? [action.payload] : [...state.items[action.payload.id].items, action.payload]
            const totalCount = state.totalCount + 1
            const totalPrice = state.totalPrice + action.payload.price
            const totalPriceItem = getTotalPrice(currentBookItems)
            const totalCountItem = getTotalCount(currentBookItems)

            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentBookItems,
                    totalCount: totalCountItem,
                    totalPrice: totalPriceItem
                }
            }

            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice
            }

        default:
            return state
    }
}

export default cart