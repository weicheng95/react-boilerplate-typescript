// eslint-disable-next-line no-use-before-define
import React, { useEffect, useState } from 'react';
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
} from '@ionic/react';

import Header from 'components/Header';

import LoginPage from './login';

type IndexProps = {}

const LandingPage = () => {
  const [state, setState] = React.useState({
    foo: 1,
    bar: 2,
  }); // state's type inferred to be {foo: number, bar: number}

  const someMethod = (obj: Partial<typeof state>) => {
    // grabbing the type of state even though it was inferred
    // some code using obj
    setState({ ...state, ...obj }); // this works
  };
  // const { name, age } = useCurrentUser();
  // someMethod({ foo: 2 });

  return (
    <LoginPage />
  );
};

export default LandingPage;
