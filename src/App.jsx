import './App.css';
import NavbarComponent from './components/Navbar';
import React from 'react';
import TeamGrid from './components/TeamGrid';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <a name="home"><h1>EVP-Project</h1></a>

      <a name='links'><h1>Links</h1></a>

      <a name='team'><h1>Team</h1></a>
      <TeamGrid />
    </div>
  );
}

export default App;
