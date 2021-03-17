import React from 'react';
import Header from './components/Header';
import AirportInfo from './components/AirportInfo';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header title="Skyscanner Flight Checker"></Header>
      <AirportInfo></AirportInfo>
      <Footer title="© Arjav Patel - 2021"></Footer>
    </div>
  );
}

export default App;
