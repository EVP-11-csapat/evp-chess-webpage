import './App.css';
import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import Main from './components/Main';
import PresentationComp from './components/Presentation';

function App() {
  return (
    <div className="App">
      <Tabs
        defaultActiveKey="home"
        id="main-menu-tabs"
        className="mb-3"
      >
        <Tab eventKey="home" title="Home">
          <Main />
        </Tab>
        <Tab eventKey="Presentation" title="Presentation">
          <PresentationComp />
        </Tab>
      </Tabs>
      {/* <NavbarComponent />
      <Container>
        <a name="home"><h1>EVP-Chess Project</h1></a>

        <a name='links'><h1>Links</h1></a>
        <Links />

        <a name='team'><h1>Team</h1></a>
        <TeamGrid />
      </Container> */}
    </div>
  );
}

export default App;
