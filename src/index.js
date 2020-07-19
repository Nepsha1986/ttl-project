import React from 'react';
import reactDOM from 'react-dom';

import {App} from "./components/app";
import ErrorBoundary from "./components/error-boundary";
import {BrowserRouter as Router} from "react-router-dom";
import {UserProvider} from "./context/user";

reactDOM.render(
    <ErrorBoundary>
        <UserProvider>
            <Router>
                <App/>
            </Router>
        </UserProvider>
    </ErrorBoundary>
    , document.getElementById('root')
);
