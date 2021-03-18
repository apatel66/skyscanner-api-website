import React from 'react';
import Header from './components/Header';
import FlightInfo from './components/FlightInfo';
import Footer from './components/Footer';
import './App.css';

function App() {
  //Build the different sections of the website
  return (
    <div className="App">
      <Header title="Skyscanner Flight Checker"></Header>
      <FlightInfo></FlightInfo> 
      <Footer title={'Arjav Patel - 2021\nMade For: Capital One Summit Challenge'}></Footer>
    </div>
  );
}

export default App;
