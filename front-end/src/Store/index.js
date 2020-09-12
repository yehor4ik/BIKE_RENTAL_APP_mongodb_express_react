import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer  from './reducers';

// const Logger = store => next => action => {
//     console.log('dispatching', action)
//     let result = next(action)
//     console.log('next state', store.getState());
//     return result;
// }

let store = createStore(reducer, applyMiddleware(thunk));

export {
    store
}