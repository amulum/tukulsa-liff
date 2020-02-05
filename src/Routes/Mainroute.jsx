import React from 'react';
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'unistore/react';
import { store } from '../store/store';
// PAGES
import Home from '../Pages/Home'
import Transactions from '../Pages/Transactions';


const Mainroute = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/riwayat-transaksi" component={Transactions}/>
                    <Route path="/riwayat-transaksi/:transaksi" component={Transactions}/>
                </Switch>
            </BrowserRouter>
        </Provider>
    )
}

export default Mainroute;