// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react';

import createCtx from 'contexts';
import { WithChildren } from 'types/props';
// import { Layout } from 'antd';

export interface HomeMainState {
  collapsed?: boolean
  setCollapsed?: () => void
}

type MainProps = WithChildren<{}>

interface User {
  name: string,
  age: number,
}
export const [useCurrentUser, CurrentUserProvider] = createCtx<User>();

const HomeMainPage = (props: MainProps) => {
  const { children } = props;
  const initialValue: User = {
    name: 'John',
    age: 13,
  };

  return (
    <CurrentUserProvider value={initialValue}>
      <section className="home-main">
        <div>
          {/* <Sidebar {...{ collapsed }} /> */}
          <div className="home-layout">
            home
            {/* <Header {...{ collapsed, setCollapsed: handleToggleCollapsed }} /> */}
            <div id="container">
              {React.Children.map(children, (child) => child)}
            </div>
          </div>
        </div>
      </section>
    </CurrentUserProvider>
  );
};

export default HomeMainPage;
