const initialState = {
    name: '',
    type: 'Road',
    price: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_FORM': {
            return {
                ...state,
                ...action.form
            }
        }
        case 'CREATE_ITEM':
        case 'CLEAR_FORM':
            return {
                ...initialState
            }
        default:
            return state
    }
}

export default reducer;