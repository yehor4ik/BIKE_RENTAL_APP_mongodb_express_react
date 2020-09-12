import React, { useCallback } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';

import './RentBike.css';

import * as listBikeAction from '../../Store/actions/listBikeAction'
import RentBikeItem from '../RentBikeItem';
import { getTotal } from '../../Utils/bikeUtils'

const RentBike = () => {

    const dispatch = useDispatch()
    const rentBike = useSelector(state => {
        return state.listBike.rent.map((el) => {
            const bike = state.listBike.list.find((bike) => bike.id === el.id);
            return {
                ...el,
                ...bike
            }
        })
    }, shallowEqual)

    const onCancelRent = useCallback(
        (id) => {
            dispatch(listBikeAction.endOfRent(id))
        },
        [dispatch],
    )

    const element = rentBike.map(({ id, ...items }) => {
        return (
            <RentBikeItem
                key={id}
                items={items}
                onCancel={() => onCancelRent(id)}/>
        )
    })

    return (
        <div className="rentBike">
            <h3 className="title font-weight-bold">{'\u{1F929}'}Your rent (Total: ${getTotal(rentBike)})</h3>
            <div className="listRentBike">
                {element}
            </div>
        </div>
    );
};

export default RentBike;