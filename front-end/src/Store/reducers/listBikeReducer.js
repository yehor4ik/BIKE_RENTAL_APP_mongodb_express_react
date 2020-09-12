const initialState = {
    list: [],
    rent: [],
    getBikesLoading: null,
    getBikesError: null,
    createItemLoading: null,
    createItemError: null,
    removeItemLoading: null,
    removeItemError: null

};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REMOVE_ITEM': {
            return {
                ...state,
                list: action.subtype === 'success' ? action.newList : state.list,
                removeItemLoading: action.subtype === 'loading',
                getBikesLoading: action.subtype === 'loading',
                removeItemError: action.subtype === 'failed' ? true : null,
            }
        }
        case 'GET_BIKES': {
            return {
                ...state,
                list: action.subtype === 'success' ? action.list : state.list,
                getBikesLoading: action.subtype === 'loading',
                getBikesError: action.subtype === 'failed' ? true : null,
            }
        }
        case 'CREATE_ITEM': {
            return {
                ...state,
                list: action.subtype === 'success' ? action.newList : state.list,
                createItemLoading: action.subtype === 'loading',
                getBikesLoading: action.subtype === 'loading',
                createItemError: action.error === 'failed' ? action.error : null,
            }
        }
        case 'SELECT_ITEM_FOR_RENT': {
            return {
                ...state,
                rent: [
                    ...state.rent,
                    {
                        id: action.itemId,
                        start: Date.now()
                    }
                ],
                
            }
        }
        case 'END_OF_RENT': {
            return {
                ...state,
                rent: state.rent.filter((el) => el.id !== action.itemId),
            }
        }
        default:
            return state
    }
};

export default reducer;