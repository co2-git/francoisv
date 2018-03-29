import React, {PureComponent} from 'react';

import TopBar from './TopBar';
import TabBar from './TabBar';
import Main from './Main';
import Section from '../Base/Section';

const Home = () => (
  <Section style={styles.container}>
    <TopBar />
    <TabBar />
    <Main />
  </Section>
);

export default Home;

const styles = {
  container: {
    height: '100vh',
  },
};
