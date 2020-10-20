import React from 'react';
import './App.css';
import Header from './Header';
import Isi from './Isi';
import Footer from './Footer';
import Jumbotron from './Jumbotron';
import Nav from './Nav';
import Sidebar from './Sidebar';
class App extends React.Component {
  render(){
    return (
      <div>
        <Jumbotron />
        <Nav />
        <div class="container" styleName="margin-top:30px">
          <div class="row">
        <Sidebar />
        <Header/>
        {/* <Isi /> */}
       </div>
      </div> 
      <Footer />  
      </div>
    );
  }
}



export default App;
