import { IRouteProps } from 'routes/types';
import LandingPage from 'pages/Landing';

import RouteList from './constants';

const routesMap: IRouteProps[] = [
  {
    id: 1,
    path: RouteList.HOME.path,
    component: LandingPage,
    meta: {
      requiresAuth: false,
    },
    childrenRoutes: [
      {
        id: 1.1,
        path: RouteList.HOME_INDEX.path,
        component: LandingPage,
        exact: true,
        meta: {
          title: RouteList.HOME_INDEX.name,
          requiresAuth: false,
        },
      },
    ],
  },
];

export default routesMap;
