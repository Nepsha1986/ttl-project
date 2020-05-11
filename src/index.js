import React from 'react';
import reactDOM from 'react-dom';

import {App} from "./components/app";
import ErrorBoundary from "./components/error-boundary";
import {BrowserRouter as Router} from "react-router-dom";

reactDOM.render(
    <ErrorBoundary>
        <Router>
            <App/>
        </Router>
    </ErrorBoundary>
    , document.getElementById('root')
);
