import React, {PureComponent} from 'react';

import TopBar from './TopBar';
import TabBar from './TabBar';
import Main from './Main';
import Section from '../Base/Section';

const Home = () => (
  <Section style={styles.container}>
    <TopBar />
    <div style={{flexGrow: 2, overflow: 'auto'}}>
      <TabBar />
      <Main />
    </div>
  </Section>
);

export default Home;

const styles = {
  container: {
    height: '100vh',
  },
};
