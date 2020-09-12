import React from 'react';

import './ListBikeItem.css';

const ListBikeItem = ({ onDelete, onSelect, items }) => {

    const { name, type, price } = items;

    return (
        <div className="listBikeItem itemBike d-flex">
            <div className="descriptionBike">{`${name} / ${type} / $${price}`}</div>
            <div className="rightRent d-flex justify-content-around">
                <button className="btn btn-primary listButton" onClick={onSelect}>Rent</button>
                <button className="btn btn-danger listButton" onClick={onDelete}>Delete</button>
            </div>
        </div>
    );
};

export default ListBikeItem;