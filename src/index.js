import React from 'react';
import reactDOM from 'react-dom';

import {App} from "./components/app/App";
import ErrorBoundary from "./components/error-boundary";
import {Header} from "./components/header/Header";
import {BrowserRouter as Router} from "react-router-dom";

reactDOM.render(
    <ErrorBoundary>
        <Router>
            <Header/>
            <App/>
        </Router>
    </ErrorBoundary>
    , document.getElementById('app')
);
