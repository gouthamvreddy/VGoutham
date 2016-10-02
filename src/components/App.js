import React, {PropTypes} from 'react';
import {Grid} from 'react-flexbox-grid';
import Home from './Home/Home';
import styles from './App.css';

class App extends React.Component {
  render() {
    return (
      <Grid style={{height: "100%", width: 'auto'}} >
        <Home />
      </Grid>
    );
  }
}

export default App;
