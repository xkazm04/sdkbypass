import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as Web3 from 'web3'


function App() {
    console.log(Web3)

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1>Web3 loaded</h1>
                <p>
                    {JSON.stringify(Web3)}
                </p>
            </header>
        </div>
    );
}

export default App;
