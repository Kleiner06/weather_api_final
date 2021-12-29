import './App.css';
import React from 'react';
import Weather from "./components/Weather";

function App() {
 return (
   <div className="App">
     <header className="App-header">
       <h1>Ultimate Weather App</h1>
     </header>
     <main>
       <Weather />
     </main>
     <footer>
       The only weather app you really need.
       <br />
       © Kleiner06
     </footer>
   </div>
 );
}

export default App;
