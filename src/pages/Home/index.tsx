// eslint-disable-next-line no-use-before-define
import React, { useContext, useState } from 'react';
import {
  IonButton, IonCard, IonCol, IonGrid, IonIcon, IonInput, IonItem, IonLabel, IonRow,
} from '@ionic/react';
import { useForm } from 'react-hook-form';
import { rocketOutline, fileTrayFullOutline } from 'ionicons/icons';

import lalamove from 'resources/assets/lalamove.svg';
import foodpanda from 'resources/assets/foodpanda.png';
import kfc from 'resources/assets/kfc.jpg';
import otp from 'resources/assets/otp.png';
import createCtx from 'contexts';
import { WithChildren } from 'types/props';
import 'pages/Home/index.scss';
import { OrderContext } from 'pages/Auth';
import { Product } from 'types/product';

export interface HomeMainState {
  collapsed?: boolean;
  setCollapsed?: () => void;
}

type MainProps = WithChildren<{}>;

interface User {
  name: string;
  age: number;
}

const Name = () => {
  const username = 'Jackywong';

  return (
    <h2 style={{
      fontSize: '30px',
      marginTop: '2rem',
      fontWeight: 'bold',
    }}
    >
      Hey,
      {' '}
      {username}
      {' '}
      !
    </h2>
  );
};

const Stocks = ({ products }: { products: Product[] }) => {
  // eslint-disable-next-line react/destructuring-assignment
  const stockData = products.map((product: any) => ({
    name: product.name,
    left: product.left,
  }));

  return (
    <>
      <p className="stock-title">
        <IonIcon icon={rocketOutline} />
        Available Credit(s):
      </p>
      <IonCard className="stock-card">
        <IonGrid>
          <IonRow className="stock-item">
            {
              stockData.map((product) => (
                <IonCol size="4">
                  <div className="stock-name">
                    {product.name.toUpperCase()}
                    <span className="number">{product.left}</span>
                  </div>
                </IonCol>
              ))
            }
          </IonRow>
        </IonGrid>
      </IonCard>
    </>
  );
};

const ProductList = () => (
  <>
    <p className="product-title">
      <IonIcon icon={fileTrayFullOutline} />
      Claim Account / Service:
    </p>
    <IonGrid>
      <IonRow>
        <IonCol>
          <IonCard
            className="product-foodpanda"
          >
            <div
              className="foodpanda-logo"
              style={{
                backgroundImage: `url(${foodpanda})`,
              }}
            />
            <IonButton fill="clear" expand="block" size="small" className="product-claim" routerLink="/product/foodpanda">Claim Now</IonButton>
          </IonCard>

        </IonCol>
        <IonCol>
          <IonCard
            className="product-lalamove"
          >
            <div
              className="lalamove-logo"
              style={{
                backgroundImage: `url(${lalamove})`,
              }}
            />
            <IonButton fill="clear" expand="block" size="small" className="product-claim">Claim Now</IonButton>
          </IonCard>

        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <IonCard
            className="product-kfc"
          >
            <div
              className="kfc-logo"
              style={{
                backgroundImage: `url(${kfc})`,
              }}
            />
            <IonButton fill="clear" expand="block" size="small" className="product-claim" routerLink="/product/kfc">Claim Now</IonButton>
          </IonCard>

        </IonCol>
        <IonCol>
          <IonCard
            className="product-otp"
          >
            <div
              className="otp-logo"
              style={{
                backgroundImage: `url(${otp})`,
              }}
            />
            <IonButton fill="clear" expand="block" size="small" className="product-claim">OTP Service</IonButton>
          </IonCard>

        </IonCol>
      </IonRow>
    </IonGrid>

  </>
);

const HomePage = () => {
  const { state } = useContext(OrderContext);

  return (
    <>
      <div id="home-header">
        <Name />
      </div>
      <div id="home-content">
        <div id="home-content__row">
          {
            state && state.order && state.order.products
              ? <Stocks products={state.order.products} />
              : ''
          }
        </div>
        <div id="home-content__row">
          <ProductList />
        </div>
      </div>
    </>
  );
};

export default HomePage;
