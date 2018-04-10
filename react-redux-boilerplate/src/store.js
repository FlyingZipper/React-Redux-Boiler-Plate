import { applyMiddleware, createStore } from 'redux';

import logger from 'redux-logger'; // https://stackoverflow.com/questions/46869671/typeerror-middleware-is-not-a-function
import thunk from 'redux-thunk';

import reducer from './reducers/index';

const configureStore = () => {

    const middleware = applyMiddleware(thunk); //add redux-logger

    const store = createStore(
        reducer,
        middleware
    );

    return store;
}

 
export default configureStore;