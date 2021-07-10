// eslint-disable-next-line no-use-before-define
import React from 'react';
import qs from 'query-string';
import {
  Switch, Route, Redirect, withRouter, RouteComponentProps,
} from 'react-router-dom';

import CONFIG from 'config';
import { IRouteProps } from 'routes/types';
import Routes from 'routes/constants';

type Props = IRouteProps & RouteComponentProps

const PrivateRoute: React.FC<Props> = ({
  component: Component,
  childrenRoutes,
  location,
  ...rest
}) => {
  const { meta } = rest;
  if (meta) {
    if (meta.title) {
      document.title = `${meta.title} - ${CONFIG.title}`;
    } else {
      document.title = CONFIG.title;
    }
  }

  // auth guard
  const auth = true;
  // const auth = (() => {
  //   // if (meta?.requiresAuth) {
  //   //   if (isLogin) {
  //   //     return true;
  //   //   }

  //   //   return false;
  //   // }

  //   return true;
  // })();

  // checking redirect url
  if (meta?.isLoginToHome) {
    const redirectUrl = qs.parse(location.search).redirectUrl as string;
    const url = redirectUrl || Routes.HOME_INDEX.path;

    return <Redirect to={url} />;
  }

  return (
    <Route render={(props) => (
      auth ? (
        <Component {...props} {...rest}>
          {Array.isArray(childrenRoutes) ? (
            <Switch>
              {childrenRoutes.map((route) => (
                // eslint-disable-next-line no-use-before-define
                <PrivateRouteComponent {...route} key={route.id} />
              ))}
            </Switch>
          ) : null}
        </Component>
      ) : (
        <Redirect to={{
          pathname: '/',
          search: `?redirectUrl=${props.location.pathname}`,
        }}
        />
      )
    )}
    />
  );
};
export const PrivateRouteComponent = withRouter(PrivateRoute);

export default PrivateRouteComponent;
