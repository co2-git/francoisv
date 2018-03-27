import React, {PureComponent} from 'react';

import Splash from './components/Layout/Splash';

export default class App extends PureComponent {
  render = () => (
    <React.Fragment>
      <Splash />
    </React.Fragment>
  );
}
