// eslint-disable-next-line no-use-before-define
import React from 'react';
import {
  IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet, IonPage, IonContent,
} from '@ionic/react';
import { home, settings, accessibility } from 'ionicons/icons';
import { Redirect, Route } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';

import LandingPage from 'pages/Landing';
import HomePage from 'pages/Home';
import Header from 'components/Header';
import FoodpandaPage from 'pages/Product/Foodpanda';
import OrderStore from 'pages/Auth';

const Tabs = () => (
  <IonReactRouter>
    <IonTabs>
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/home">
          <IonIcon icon={home} size="small" />
          <IonLabel>home</IonLabel>
        </IonTabButton>

        <IonTabButton tab="settings" href="/settings">
          <IonIcon icon={accessibility} size="small" />
          <IonLabel>My Account</IonLabel>
        </IonTabButton>
      </IonTabBar>

      <IonRouterOutlet>
        <OrderStore>
          <IonPage>
            <Header />
            <IonContent>
              <Route path="/landing" component={LandingPage} />
              <Route path="/home" component={HomePage} />
              <Route path="/product/foodpanda" component={FoodpandaPage} />
              {/* <Route path="/settings" component={SettingsPage} /> */}
              <Route exact path="/" render={() => <Redirect to="/landing" />} />
            </IonContent>
          </IonPage>
        </OrderStore>
      </IonRouterOutlet>
    </IonTabs>
  </IonReactRouter>
);

export default Tabs;
