import React from 'react';
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'unistore/react';
import { store } from '../store/store';
// PAGES
import Home from '../Pages/Home'


const Mainroute = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                </Switch>
            </BrowserRouter>
        </Provider>
    )
}

export default Mainroute;