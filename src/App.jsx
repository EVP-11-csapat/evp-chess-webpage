import './App.css';
import React, { useEffect } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import Main from './components/Main';
import DeveloperDocs from './components/DeveloperDocs';
import UserDocs from './components/UserDocs';
import Gantt from './components/Gantt';

function App() {
  return (
    <div className="App bg-dark mh-100 ">
      <Tabs
        defaultActiveKey="home"
        id="main-menu-tabs"
        className="mb-3"
        justify
      >
        <Tab eventKey="home" title="Home">
          <Main />
        </Tab>
        {/* <Tab eventKey="Presentation" title="Presentation">
          <PresentationComp />
        </Tab> */}
        {/* <Tab eventKey="UML Diagrams" title="UML Diagrams" className='bg-dark-text-white'>
          <UMLDiagrams />
        </Tab> */}
        <Tab eventKey="Developer Documentation" title="Developer Documentation">
          <DeveloperDocs />
        </Tab>
        <Tab eventKey="User Documentation" title="User Documentation">
          <UserDocs />
        </Tab>
        <Tab eventKey="Gantt" title="Gantt">
          <Gantt />
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;
