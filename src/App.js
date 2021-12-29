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

/*
1. npm install -g firebase-tools
2. firebase login
3. firebase init
4. hosting
5. BUILD
6. single page app= yes
7. npm run build
8. firebase deploy
*/