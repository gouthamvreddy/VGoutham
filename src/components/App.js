import React, {PropTypes} from 'react';
import {Grid} from 'react-flexbox-grid';
import HomePage from './HomePage/HomePage';
import styles from './App.css';

class App extends React.Component {
  render() {
    return (
      <Grid style={{height: "100%", width: 'auto'}} >
        <HomePage />
      </Grid>
    );
  }
}

export default App;
