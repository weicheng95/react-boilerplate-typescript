// eslint-disable-next-line no-use-before-define
import React from 'react';
import {
  IonHeader, IonToolbar, IonTitle, IonChip, IonAvatar, IonLabel,
} from '@ionic/react';

import LandingPage from 'pages/Landing';
import logo from 'resources/assets/logo.png';
import 'components/Header/index.scss';

const Header = () => (
  <IonHeader>
    <IonChip>
      <IonAvatar>
        <img src={logo} alt="icon" />
      </IonAvatar>
      <IonLabel id="header-title">fpxbrando</IonLabel>
    </IonChip>
  </IonHeader>
);

export default Header;
