// eslint-disable-next-line no-use-before-define
import React, { useEffect, useState } from 'react';
import { Button } from 'antd';

import { useCurrentUser } from './main';

type IndexProps = {}

const HomeIndexPage = () => {
  const [state, setState] = React.useState({
    foo: 1,
    bar: 2,
  }); // state's type inferred to be {foo: number, bar: number}

  const someMethod = (obj: Partial<typeof state>) => {
    // grabbing the type of state even though it was inferred
    // some code using obj
    setState({ ...state, ...obj }); // this works
  };
  const { name, age } = useCurrentUser();
  // someMethod({ foo: 2 });

  return (
    <div>
      <div className="home-index oya">
        home index
        {name}
        :
        {age}
      </div>
      <Button type="dashed">Submit</Button>
    </div>

  );
};

export default HomeIndexPage;
