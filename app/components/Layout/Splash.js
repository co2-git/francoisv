import React, {PureComponent} from 'react';

import Home from './Home';

class Splash extends PureComponent {
  state = {ready: true};
  render = () => (
    <React.Fragment>
      {this.state.ready && <Home />}
      {!this.state.ready && (
        <div>Loading...</div>
      )}
    </React.Fragment>
  )
}

export default Splash;
