import React, { Fragment } from 'react';

import GlobalStyle from './styles/global';
//stateless
const App = () => ( //sempre  com parênteses
  <Fragment>
    <GlobalStyle />
    <div className="App" />
  </Fragment>
);

export default App;
