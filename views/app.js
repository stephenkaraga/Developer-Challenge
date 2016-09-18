import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import MyAwesomeReactComponent from 'material-ui/AutoComplete';
 
const App = () => (
  <MuiThemeProvider>
    <MyAwesomeReactComponent />
  </MuiThemeProvider>
);
 
ReactDOM.render(
  <App />,
  document.getElementById('content')
);