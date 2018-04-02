import React, {PureComponent} from 'react';
import {Route, Switch} from 'react-router-dom';

import Languages from '../Language/Languages';
import Project from '../Project/Home';
import Articles from '../Article/List';
import Article from '../Article/Article';
import * as UIActions from '../../redux/actions/UIActions';

const Main = () => (
  <main onScroll={UIActions.onScroll} style={styles.container}>
    <Switch>
      <Route exact path="/" component={Languages} />
      <Route path="/languages" component={Languages} />
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
    // flexGrow: 2,
    // overflow: 'auto',
  },
};
