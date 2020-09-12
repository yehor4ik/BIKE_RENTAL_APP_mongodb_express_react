import React, { useCallback, useEffect } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';

import './ListBike.css';

import ListBikeItem from '../ListBikeItem/ListBikeItem';
import * as listBikeAction from '../../Store/actions/listBikeAction'
import GetBikeLoading from '../GetBikeLoading'

const ListBike = () => {

    const dispatch = useDispatch();
    const listBike = useSelector(state => state.listBike.list.filter((bike) => !state.listBike.rent.find(rent => rent.id === bike.id)), shallowEqual)
    const isLoading = useSelector(state => state.listBike.getBikesLoading)
    const loadingDelete = useSelector(state => state.listBike.removeItemLoading)
    const loadingCreate = useSelector(state => state.listBike.createItemLoading)

    useEffect(() => {
        dispatch(listBikeAction.getBikes())
    }, [dispatch])

    const onRemoveItem = useCallback(
        (id) => {
            dispatch(listBikeAction.onRemoveItem(id))
        },
        [dispatch],
    );

    const onSelectItem = useCallback(
        id => {
            dispatch(listBikeAction.onSelectItem(id))
        }, [dispatch]
    )

    const element = listBike.map(({id, ...items}) => {
        return (
            <ListBikeItem
                key={id}
                items={items} 
                onDelete={() => onRemoveItem(id)}
                onSelect={() => onSelectItem(id)} />
            );
    });

    const list = loadingDelete || loadingCreate ? [] : element;

    return (
        <div className="listBike">
            <h3 className="font-weight-bold">{"\u{1F6B2}"}Available bicycles ({element.length})</h3>
            <div className="listAvailableBicycles">
                {list}
                {isLoading && <GetBikeLoading />}
            </div>
        </div>
    );
};

export default ListBike;