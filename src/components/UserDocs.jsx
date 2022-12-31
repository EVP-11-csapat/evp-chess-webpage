import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
import React, { useEffect, useState } from 'react'
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import PDF from "./umldiagrams.pdf";
import { Container, ProgressBar } from 'react-bootstrap';
import { fullScreenPlugin } from '@react-pdf-viewer/full-screen';
import { ExitFullScreenIcon, FullScreenIcon } from '@react-pdf-viewer/full-screen';
import { printPlugin } from '@react-pdf-viewer/print';

// Import styles
import '@react-pdf-viewer/print/lib/styles/index.css';
import '@react-pdf-viewer/full-screen/lib/styles/index.css';

const UserDocs = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const fullScreenPluginInstance = fullScreenPlugin(ExitFullScreenIcon, FullScreenIcon);
  const printPluginInstance = printPlugin();

  const pdfFile = PDF;

  return (
    <Container className='justify-content-center flex'>
      <div className='text-danger mb-3 pb-5' style={{height: '89vh'}}>
          <h1>User Documentation</h1>
          <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.js">
              <Viewer 
                fileUrl={pdfFile} 
                plugins={[defaultLayoutPluginInstance, fullScreenPluginInstance, printPluginInstance]} 
                defaultScale={1}
                theme="dark" 
              />
          </Worker>
      </div>
    </Container>
  )
}

export default UserDocs