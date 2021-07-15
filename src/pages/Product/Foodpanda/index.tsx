// eslint-disable-next-line no-use-before-define
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  IonButton,
  IonChip,
  IonCol,
  IonGrid,
  IonIcon,
  IonInput, IonItem, IonLabel, IonLoading, IonRow, IonSpinner,
} from '@ionic/react';
import { copyOutline } from 'ionicons/icons';

import loading from 'resources/assets/loading.svg';
import SomethingWrong from 'resources/assets/something_wrong.jpg';
import 'pages/Product/Foodpanda/index.scss';
import { OrderContext } from 'pages/Auth';
import { generateFoodpandaAccount } from 'services/order/order';
import { ProductAccount } from 'types/auth';

export interface HomeMainState {
  collapsed?: boolean;
  setCollapsed?: () => void;
}

const LoadingComponent = () => (
  <div id="loading-section">
    <img src={loading} alt="loading" width="130" />
    <h4>Generating account...</h4>
    <p>This process might take 10 to 30sec, please be patient.</p>
  </div>
);

const AccountErrorComponent = ({ triggerClaimAccount }: any) => (
  <div id="loading-section">
    <img src={SomethingWrong} alt="loading" />
    <h4>Oops, seem like something happen while generating account.</h4>
    <p>How about try again?</p>
    <IonButton onClick={triggerClaimAccount}>Try Again</IonButton>
  </div>
);

const VerifyForm = ({ email, password, status }: ProductAccount) => {
  const statusColor = (verifyStatus?: string) => {
    switch (verifyStatus) {
      case 'UNVERIFIED':
        return 'warning';
      case 'VERIFIED':
        return 'success';
      case 'FAILED':
        return 'danger';
      case 'START_VERIFIY':
      case 'VERIFYING':
        return 'tertiary';
      default:
        return 'warning';
    }
  };

  return (
    <form id="verify-form">
      <IonItem>
        <IonChip color={statusColor(status)}>
          <IonLabel><b>{status}</b></IonLabel>
        </IonChip>
      </IonItem>
      <IonItem className="form-field" mode="md">
        <IonLabel position="stacked" color="medium">Email</IonLabel>
        <div className="form-field__value">{email}</div>
        <IonIcon className="form-field__icon" icon={copyOutline} />
      </IonItem>
      <IonItem className="form-field" mode="md">
        <IonLabel position="stacked" color="medium">Password</IonLabel>
        <div className="form-field__value">{password}</div>
        <IonIcon className="form-field__icon" icon={copyOutline} />
      </IonItem>
    </form>
  );
};

const FoodpandaPage = () => {
  const [account, setAccount] = useState<ProductAccount>({});
  const [accountErr, setAccountErr] = useState<any>(undefined);
  const { state } = useContext(OrderContext);

  // if (!state.order) {
  //   return <Redirect to="/landing" push />;
  // }

  const generateAccount = () => {
    generateFoodpandaAccount({
      orderId: state.order ? state.order.id : '',
      product: 'foodpanda',
    }).then((data) => {
      setAccount(data);
    }).catch((err) => {
      setAccountErr(err.response);
    });
  };

  const triggerClaimAccount = () => {
    setAccountErr(undefined);
    generateAccount();
  };

  useEffect(() => {
    generateAccount();
  }, []);

  if (Object.keys(account).length) {
    return (
      <IonGrid id="foodpanda">
        <IonRow>
          <p>
            Step 1: Login with the provided account with
            {' '}
            <b>Incognito</b>
            {' '}
            Browser
          </p>
          <VerifyForm {...account} />
        </IonRow>
        <IonRow className="divider" />
        <IonRow>
          <IonCol>
            <p>
              Step 2: Click the button below to verify the Account, wait until the status become
              {' '}
              <strong>Verified</strong>
            </p>
            <div>
              <IonButton>Verify Now</IonButton>
              <div style={{
                fontSize: '14px',
                color: '#727272',
              }}
              >
                The Status will auto update every 5sec.

              </div>
            </div>
          </IonCol>
        </IonRow>
        <IonRow className="divider" />
        <IonRow>
          <IonCol>
            <p>
              Step 3: Refresh the Foodpanda Website,
              make sure the phone number is already there.
            </p>
            <p>Now you can proceed with your foodpanda order.</p>
          </IonCol>
        </IonRow>
      </IonGrid>
    );
  } if (accountErr) {
    return <AccountErrorComponent {...accountErr} triggerClaimAccount={triggerClaimAccount} />;
  }

  return <LoadingComponent />;
};

export default FoodpandaPage;
