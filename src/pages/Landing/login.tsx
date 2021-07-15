// eslint-disable-next-line no-use-before-define
import React, { useContext, useEffect, useState } from 'react';
import {
  IonButton, IonInput, IonItem, IonLabel,
} from '@ionic/react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import hello from 'resources/assets/hello_illustration.svg';
import 'pages/Landing/login.scss';
import { OrderContext } from 'pages/Auth';
import { guessLogin } from 'services/auth/api';
import { GuessLoginRequest } from 'types/auth';

const LoginPage = () => {
  const { register, handleSubmit } = useForm();
  const { state, dispatch } = useContext(OrderContext);
  const history = useHistory();

  const onSubmit = async (formData: GuessLoginRequest) => {
    guessLogin(formData).then((data) => {
      if (data) {
        dispatch({ type: 'SET_ORDER', payload: data });
        history.push('/home');
      }

      return null;
    }).catch((err) => {
      dispatch({ type: 'SET_ERROR', payload: err.response });
    });
  };

  return (
    <>
      <div id="login-header">
        <img className="login-logo" src={hello} alt="logo" width="200" />
        <p>Get Started!</p>
      </div>

      <form id="login-form" onSubmit={handleSubmit(onSubmit)}>
        <IonItem className="form-field" mode="md">
          <IonLabel position="stacked" color="medium">Order ID</IonLabel>
          <IonInput {...register('ordersn')} placeholder="" />
        </IonItem>
        <IonItem className="form-field" mode="md">
          <IonLabel position="stacked" color="medium">Username</IonLabel>
          <IonInput {...register('userName')} placeholder="" />
        </IonItem>
        <IonButton expand="block" type="submit">Submit</IonButton>
      </form>
    </>
  );
};

export default LoginPage;
