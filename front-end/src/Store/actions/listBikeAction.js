import { getBikes as getBikesResource, createItem as createItemResource, removeItem as removeItemResource } from '../../Resources/bike';
import {removeElementById} from '../../Utils/bikeUtils'

export const onSelectItem = (id) => {
    return {
        type: 'SELECT_ITEM_FOR_RENT',
        itemId: id
    }
};

export const endOfRent = (id) => {
    return {
        type: 'END_OF_RENT',
        itemId: id
    }
};

export const onRemoveItem = (id) => async (dispatch, getState) => {
    dispatch({
        type: 'REMOVE_ITEM',
        subtype: 'loading'
    })
    removeItemResource(id).then(res => {
        const state = getState();
        const newList = removeElementById(res.id, state.listBike.list)
        dispatch({
            type: 'REMOVE_ITEM',
            subtype: 'success',
            newList
        })
    },
    (createItemError) => {
        dispatch({
            type: 'REMOVE_ITEM',
            subtype: 'failed',
        })
    })
}

export const createItem = (item) => async (dispatch, getState) => {
    dispatch({
        type: 'CREATE_ITEM',
        subtype: 'loading'
    })
    createItemResource(item).then(res => {
        const state = getState();
        const newList = [...state.listBike.list, res]
        dispatch({
            type: 'CREATE_ITEM',
            subtype: 'success',
            newList
        })
    },
    (createItemError) => {
        dispatch({
            type: 'CREATE_ITEM',
            subtype: 'failed',
            error: createItemError.message
        })
    })
}

export const getBikes = () => async (dispatch, getState) => {
        dispatch({
            type: 'GET_BIKES',
            subtype: 'loading'
        })
        getBikesResource().then(res => {
            dispatch({
                type: 'GET_BIKES',
                subtype: 'success',
                list: res
            })
        },
        (getBikeListError) => {
            dispatch({
                type: 'GET_BIKES',
                subtype: 'failed',
            })
        })
    };