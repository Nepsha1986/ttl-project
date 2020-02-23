import React  from 'react';
import  reactDOM from 'react-dom';

import ErrorBoundary from "./components/error-boundary";

const App = () => {
  return(
      <ErrorBoundary>
        <h2>My react app</h2>
      </ErrorBoundary>
  )
};

reactDOM.render(<App/>, document.getElementById('app'));
