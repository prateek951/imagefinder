import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import Navbar from './components/Navbar';
import Search from './components/Search';
// import ImageContainer from './components/ImageContainer';

class App extends Component {
  render() {
    return (
     <MuiThemeProvider>
       <div>
         <Navbar/>
       </div>
       <Search/>
     </MuiThemeProvider>
    );
  }
}

export default App;
