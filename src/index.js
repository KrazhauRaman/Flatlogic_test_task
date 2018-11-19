import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './RootReducer/rootReducer';

import * as Routes from './Routing/routes';

import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from './Components/Header/Header';
import NewTask from './Components/NewTask/NewTask';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <React.Fragment>
            <Header />
            <HashRouter>
                <Switch>
                    <Redirect exact from="/" to="/active-tasks" />
                    <Route exact path="/active-tasks" component={Routes.ActiveTasks} />
                    <Route exact path="/completed-tasks" component={Routes.CompletedTasks} />
                    <Route component={Routes.ActiveTasks} />  {/* Сюда можно добавить 404 страницу или ещё что, пока просто загулшка */}
                </Switch>
            </HashRouter>
            <NewTask />
        </React.Fragment>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
