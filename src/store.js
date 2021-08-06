import React from "react";
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {rootReducer} from "./hooks/redux/Reducers";

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
)

export const Store = ({children})=>{

    return(
        <Provider store={store}>
            {children}
        </Provider>
    );
}