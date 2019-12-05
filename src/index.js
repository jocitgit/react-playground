import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './service-worker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import App from './components/app';
// import ReduxDemo from './redux/ReduxDemo';
const App = lazy(() => import('./components/app'));
const ReduxDemo = lazy(() => import('./redux/ReduxDemo'));

// Uses lazy loading to load full page - codesplitting
ReactDOM.render(
    <Router>
        <Suspense fallback={<div>Loading page...</div>}>
            <Switch>
                <Route path="/redux" component={ReduxDemo} />
                <Route exact path="/" component={App} />
            </Switch>
        </Suspense>
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();