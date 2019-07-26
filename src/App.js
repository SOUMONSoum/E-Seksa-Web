import React, { Component } from 'react';

import './style/app.css';

import Navigation from './views/layouts/Navigation';
import AppRoutes from './routes/routes';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      value: "km"
    };
  }

  render() {
    return (
      <React.Fragment>
        <Navigation />
        <AppRoutes/>
      </React.Fragment>
    )
  }
}

export default App;
