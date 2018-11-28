import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './src/components/App';


import axios from 'axios';

const serverRender = () =>
  axios.get(`/api/mortgageCalculator/:id`)
    .then(resp => {
      return ReactDOMServer.renderToString(
        <App initialContests={resp.data.contests} />
      );
    });

export default serverRender;
