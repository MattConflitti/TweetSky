import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import AppContainer from './containers/AppContainer';

//TODO implement reducers
import reducer from './reducers';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

const configureStore = (initialState) => {
    const enhancer = compose(
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        )
    );
    return createStore(reducer, initialState, enhancer);
};

const store = configureStore({});

/**
 * Main entry point to application.
 * Provides the navigation and main view functionality
 */
export default class App extends Component {

    /**
     * Renders the main view of the application. Here is where the
     * Navigator is used to render the view depending on what user
     * is doing.
     * @returns {XML}
     */
    render() {
        return (
            <Provider store={store}>
                <AppContainer />
            </Provider>
        );
    }
}

