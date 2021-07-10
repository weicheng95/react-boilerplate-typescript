import { IRouteProps } from 'routes/types';
import HomeIndexPage from 'pages/home';
import HomeMainPage from 'pages/home/main';

import RouteList from './constants';

const routesMap: IRouteProps[] = [
  {
    id: 1,
    path: RouteList.HOME.path,
    component: HomeMainPage,
    meta: {
      requiresAuth: false,
    },
    childrenRoutes: [
      {
        id: 1.1,
        path: RouteList.HOME_INDEX.path,
        component: HomeIndexPage,
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
