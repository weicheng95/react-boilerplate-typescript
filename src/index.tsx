// eslint-disable-next-line no-use-before-define
import React from 'react';
import { render } from 'react-dom';
import { IonApp } from '@ionic/react';

import reportWebVitals from 'reportWebVitals';
import 'styles/index.scss';
import Tabs from 'pages/tab';

render(
  <IonApp id="app">
    <Tabs />
  </IonApp>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
