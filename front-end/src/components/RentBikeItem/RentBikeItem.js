import React, { useEffect, useState } from 'react';
import moment from 'moment';

import './RentBikeItem.css';



const RentBikeItem = ({ items, onCancel }) => {

    const [time, setTime] = useState(Date.now())

    const tick = () => {
        return setInterval(() => {
            setTime(Date.now())
        }, 500)
    }

    useEffect(() => {
        const a = tick();
        return () => {
            clearInterval(a)
        }
    }, [])

    const { name, type, price, start } = items;

    return (
        <div className="rentBikeItem itemBike d-flex">
            <div className="rentItem descriptionBike">{`${name} / ${type} / $${price}`}</div>
            <div className="rentItem descriptionBike">{moment.utc(time - start).format('HH:mm:ss')}</div>
            <div className="rentItem">
                <button className="btn btn-danger float-right " onClick={onCancel}>Cancel rent</button>
            </div>
        </div>
    );
};

export default RentBikeItem;