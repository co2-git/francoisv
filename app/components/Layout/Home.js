import React, {PureComponent} from 'react';

import ForkMeOnGitHub from './ForkMeOnGitHub';
import TopBar from './TopBar';
import Section from '../Base/Section';
import border from '../../styles/mixins/border';
import flex from '../../styles/mixins/flex';

export default class Home extends PureComponent {
  render = () => (
    <Section style={styles.container}>
      <TopBar />
      <section style={styles.tabBar}>
      </section>
      <section style={styles.main}>
      </section>
    </Section>
  );
}

const styles = {
  container: {
    height: '100vh',
  },
  topBar: {
    boxSizing: 'border-box',
  },
  tabBar: {
    boxSizing: 'border-box',
  },
  main: {
    boxSizing: 'border-box',
    flexGrow: 2,
    overflow: 'auto',
  },
};
