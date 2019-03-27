import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from './router/Approuter';
import {Provider} from "unistore/react";
import {store} from './components/store';
import * as serviceWorker from './serviceWorker';

const render = Component =>{
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
            <Component />
            </BrowserRouter>
        </Provider>,
        document.getElementById("root")
        );
}


render(AppRouter);
serviceWorker.unregister();
