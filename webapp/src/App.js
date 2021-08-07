import './App.css';
import React from 'react';
import Header from './components/Header';
import ConnectMetaMask from './components/connectMetaMask';
import SendEth from './components/sendEth'

function App() {
  return (
    <div className="App">
      <Header />
      <ConnectMetaMask />
      <SendEth />
    </div>
  );
}

export default App;
