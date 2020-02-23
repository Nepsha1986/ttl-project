import React from 'react';
import reactDOM from 'react-dom';

import {App} from "./components/app/App";
import ErrorBoundary from "./components/error-boundary";
import {Header} from "./components/header/Header";

reactDOM.render(
    <ErrorBoundary>
        <Header/>
        <App/>
    </ErrorBoundary>
    , document.getElementById('app')
);
