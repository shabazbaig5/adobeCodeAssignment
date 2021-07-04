import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import React,{ Component } from 'react'

class App extends Component{

  render(){

    return(

      <>
        <header id="topNavBar">
          <Navbar />
        </header>

        <main>
          <Main />
        </main>
        
        <footer>

        </footer>
      </>
    )

  }
  


}


export default App;
