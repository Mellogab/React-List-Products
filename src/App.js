import React, {Component} from 'react';
import Routes from './routes'

import './styles.css'
import Header from './Components/Header'
import './Components/Header/styles.css'


import Main from './pages/main';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Header/>
        <Routes/>      
      </div>
    );
  }
}
  
export default App;
