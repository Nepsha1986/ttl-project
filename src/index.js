import React  from 'react';
import  reactDOM from 'react-dom';

const App = () => {
  return(
      <div>
        <h2>My react app</h2>
      </div>
  )
};

reactDOM.render(<App/>, document.getElementById('app'));
