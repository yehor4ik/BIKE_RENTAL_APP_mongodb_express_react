import React, { useCallback } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';

import './CreateForm.css';

import * as createFormAction from '../../Store/actions/createFormAction'
import * as listBikeAction from '../../Store/actions/listBikeAction';

const CreateForm = () => {

    const dispatch = useDispatch();
    const dropDownList = useSelector(state => state.dropDownList.dropDownList);
    const createForm = useSelector(state => state.createForm, shallowEqual);
    const isLoading = useSelector(state => state.listBike.createItemLoading);

    const { name, price } = createForm;

    const changeInputForm = ({ target }) => {
        dispatch(createFormAction.updateForm({
            [target.name]: target.value
        }))
    };

    const changeDropDownList = ({ target }) => {
        dispatch(createFormAction.updateForm({
            type: target.value
        }))
    };

    const onFormSubmit = useCallback(
        (e) => {
            e.preventDefault();
            if(name === '' || price ===''){
                dispatch(createFormAction.clearForm())
            } else if (name.split('').every(el => el === ' ')) {
                dispatch(createFormAction.clearForm())
            } else {
                dispatch(listBikeAction.createItem(createForm))
            }
        },
        [createForm, dispatch, name, price]
    )

    const element = dropDownList.map(({ id, name }) => {
        return (
            <option key={id} value={name}>
                {name}
            </option>
        );
    })


    return (
        <div className="createForm">
            <h3 className="font-weight-bold">{'\u{1F911}'}Create new rent</h3>
            <form className="form" onSubmit={onFormSubmit}>
                    <input type="text"
                        className="formNameBike"
                        name="name"
                        placeholder="Name of the bike"
                        value={name}
                        onChange={changeInputForm}
                        maxLength="15"
                    />
                    <select className="dropDownList" name="dropDownList" onChange={changeDropDownList}>
                        {element}
                    </select>
                    <input type="number"
                        className="formBikeName"
                        name="price"
                        placeholder="Price of the bike"
                        value={price}
                        onChange={changeInputForm}
                        min="0"
                        max="9999"
                        step="any"
                    />
                <div className="formWidth">
                    {!isLoading && <button className="btn btn-success">Submit rent</button>}
                </div>
            </form>
        </div>
    )
};

export default CreateForm;