import './App.css';
import NavbarComponent from './components/Navbar';
import React from 'react';
import TeamGrid from './components/TeamGrid';
import Links from './components/Links';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Container>
        <a name="home"><h1>EVP-Project</h1></a>

        <a name='links'><h1>Links</h1></a>
        <Links />

        <a name='team'><h1>Team</h1></a>
        <TeamGrid />
      </Container>
    </div>
  );
}

export default App;
