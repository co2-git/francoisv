import React, {PureComponent} from 'react';
import {Route, Switch} from 'react-router-dom';

import Language from '../Language/Home';
import Project from '../Project/Home';
import Articles from '../Article/List';
import Article from '../Article/Article';

const Main = () => (
  <main style={styles.container}>
    <Switch>
      <Route exact path="/" component={Language} />
      <Route path="/languages" component={Language} />
      <Route path="/projects" component={Project} />
      <Route exact path="/articles" component={Articles} />
      <Route path="/articles/:article" component={Article} />
    </Switch>
  </main>
);

export default Main;

const styles = {
  container: {
    boxSizing: 'border-box',
    flexGrow: 2,
    overflow: 'auto',
  },
};
