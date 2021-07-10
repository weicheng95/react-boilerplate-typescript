// eslint-disable-next-line no-use-before-define
import React from 'react';
import { render } from 'react-dom';

import Routes from 'routes';
import reportWebVitals from 'reportWebVitals';

import 'styles/index.scss';

render(
  <Routes />,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
