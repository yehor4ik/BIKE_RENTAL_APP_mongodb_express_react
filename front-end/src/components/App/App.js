import React from 'react';
import { useSelector } from 'react-redux';

import './App.css';

import CreateForm from '../CreateForm';
import RentBike from '../RentBike';
import ListBike from '../ListBike';
import Error from '../Error';


const App = () => {

    const error = useSelector(state => state.listBike.getBikesError);
    const page = error ? <Error /> : <div className="app container">
        <h1 className="title font-weight-bold">Awesome Bike Rental</h1>
        <CreateForm />
        <RentBike />
        <ListBike />
    </div>

    return page;
};

export default App;