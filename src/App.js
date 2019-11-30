import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header.js'
import Main from './components/main.js'
import Footer from './components/footer.js'
import Socialnetwork from './components/socialnetwork';

function App() {
  return (
    <div> 
    <Header/> 
    <Main/>
    <Socialnetwork/>
    <Footer/>
    </div>

  );
}

export default App;
