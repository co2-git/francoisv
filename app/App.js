import React, {PureComponent} from 'react';

import ForkMeOnGitHub from './components/Layout/ForkMeOnGitHub';

export default class App extends PureComponent {
  render = () => (
    <section>
      <h1>francois | developer</h1>
      <ForkMeOnGitHub />
    </section>
  );
}
