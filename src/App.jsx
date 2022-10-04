import './App.css';
import React, { useEffect } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import Main from './components/Main';
import PresentationComp from './components/Presentation';
// import Specification from './components/Specification';

function App() {
  return (
    <div className="App bg-dark mh-100 text-white">
      <Tabs
        defaultActiveKey="home"
        id="main-menu-tabs"
        className="mb-3 bg-dark text-white"
        justify
      >
        <Tab eventKey="home" title="Home" className='bg-dark text-white mh-100'>
          <Main />
        </Tab>
        <Tab eventKey="Presentation" title="Presentation" className='bg-dark text-white'>
          <PresentationComp />
        </Tab>
        {/* <Tab eventKey="Specification" title="Specification" className='bg-dark-text-white'>
          <Specification />
        </Tab> */}
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
