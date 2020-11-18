export const fetchBooks = () => (dispatch) => {
    dispatch(setLoaded(false))
    fetch('./db.json')
        .then((response) => response.json())
        .then((resolve) => dispatch(setBooks(resolve)))
}

export const setLoaded = payload => ({
    type: 'SET_LOADED',
    payload
})

export const setBooks = items => ({
    type: 'SET_BOOKS',
    payload: items
})