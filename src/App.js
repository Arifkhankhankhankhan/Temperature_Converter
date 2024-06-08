import React, { useState } from 'react';
import './App.css';

function App() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');
  const [kelvin, setKelvin] = useState('');

  const handleCelsiusChange = (e) => {
    let c = parseFloat(e.target.value);
    if (isNaN(c)) {
      setFahrenheit('');
      setKelvin('');
    } else {
      setFahrenheit((c * 9/5) + 32);
      setKelvin(c + 273.15);
    }
    setCelsius(e.target.value);
  };

  const handleFahrenheitChange = (e) => {
    let f = parseFloat(e.target.value);
    if (isNaN(f)) {
      setCelsius('');
      setKelvin('');
    } else {
      setCelsius((f - 32) * 5/9);
      setKelvin((f - 32) * 5/9 + 273.15);
    }
    setFahrenheit(e.target.value);
  };

  const handleKelvinChange = (e) => {
    let k = parseFloat(e.target.value);
    if (isNaN(k)) {
      setCelsius('');
      setFahrenheit('');
    } else {
      setCelsius(k - 273.15);
      setFahrenheit((k - 273.15) * 9/5 + 32);
    }
    setKelvin(e.target.value);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Temperature Converter</h1>
      </div>
      <div className="input1">
        <label htmlFor="celsius">Enter temperature in Celsius:</label>
        <input 
          type="number" 
          id="celsius" 
          placeholder="Enter your temperature in Celsius"
          value={celsius}
          onChange={handleCelsiusChange}
        />
      </div>
      <div className="input2">
        <label htmlFor="kelvin">Enter temperature in Kelvin:</label>
        <input 
          type="number" 
          id="kelvin" 
          placeholder="Enter your temperature in Kelvin"
          value={kelvin}
          onChange={handleKelvinChange}
        />
      </div>
      <div className="input3">
        <label htmlFor="fahrenheit">Enter temperature in Fahrenheit:</label>
        <input 
          type="number" 
          id="fahrenheit" 
          placeholder="Enter your temperature in Fahrenheit"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
        />
      </div>
    </div>
  );
}

export default App;
