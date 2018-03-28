import React from 'react';

import Section from '../Base/Section';
import flex from '../../styles/mixins/flex';
import ForkMeOnGitHub from './ForkMeOnGitHub';

const TopBar = () => (
  <Section style={styles.container}>
    <img
      alt="francoisv"
      src="https://avatars1.githubusercontent.com/u/1662766?s=40&v=4"
    />
    <ForkMeOnGitHub style={{flexGrow: 2}} />
  </Section>
);

export default TopBar;

const styles = {
  container: {
    ...flex({}),
  },
};
