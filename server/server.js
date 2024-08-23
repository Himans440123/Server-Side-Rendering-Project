import express from 'express';
import React from 'react';
import ReactDomServer from 'react-dom/server';
import path from 'path';
import fs from 'fs'; 
import App from '../src/App';
import Counter from '../src/counter';
import Props from '../src/Props';


const app = express();
const router = express.Router();

const PORT = 8000;

const renderPage = (component) => {
  return (request, response) => {
    fs.readFile(path.resolve('./build/index.html'), 'utf-8', (error, data) => {
      if (error) {
          console.log(error);
          return response.status(500).send('Error', error);
      }
      response.send(
          data.replace(
                '<div id="root"></div>',
              `<div id='root'>${ReactDomServer.renderToString(component)}</div>`
          )
      );
    });
  };
};

router.use('^/$', renderPage(<App />));
router.use('^/counter$', renderPage(<Counter />));
router.use('^/props$', renderPage(<Props />));
// router.use('^/contact$', renderPage(<Contact />));

router.use(express.static(path.resolve(__dirname, '..', 'build')));

app.use(router);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
