import 'babel-polyfill';
import React from 'react';
import {Provider} from 'react-redux';

import Home from './components/Layout/Home';
import store from './redux/store';

const App = () => (
  <Provider store={store}>
    <Home />
  </Provider>
);

export default App;
