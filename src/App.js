import { useState } from "react";
import ReactDOM from 'react-dom/client';
import './App.css';

function App() {
  const [stationName, setstationName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${stationName}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input 
          type="text" 
          value={stationName}
          onChange={(e) => setstationName(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  )
}

export default App;
