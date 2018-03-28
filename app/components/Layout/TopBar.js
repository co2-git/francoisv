import React from 'react';

import Section from '../Base/Section';
import Icon from '../Base/Icon';
import flex from '../../styles/mixins/flex';
import border from '../../styles/mixins/border';
import ForkMeOnGitHub from './ForkMeOnGitHub';

const TopBar = () => (
  <Section style={styles.container}>
    <img
      alt="francoisv"
      src="https://avatars1.githubusercontent.com/u/1662766?s=40&v=4"
    />
    <a href="https://github.com/co2-git/francoisv" style={{color: 'black'}}>
      <Icon name="github" style={{fontSize: 40}} />
    </a>
  </Section>
);

export default TopBar;

const styles = {
  container: {
    ...flex({alignX: 'between', alignY: 'center'}),
    ...border.bottom({width: 1}),
  },
};
