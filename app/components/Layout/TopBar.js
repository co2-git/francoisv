import React from 'react';

import Section from '../Base/Section';
import Icon from '../Base/Icon';
import flex from '../../styles/mixins/flex';
import margin from '../../styles/mixins/margin';
import * as fonts from '../../styles/vars/fonts';

const TopBar = () => (
  <Section style={styles.container}>
    <img
      alt="francoisv"
      src="https://avatars1.githubusercontent.com/u/1662766?s=40&v=4"
      style={{width: 40, height: 40}}
    />
    <div style={styles.title}>
      francois :: developer
    </div>
    <a
      href="https://github.com/co2-git/francoisv"
      style={{color: 'black'}}
      target="_blank"
    >
      <Icon name="github" style={{fontSize: 30, color: '#666'}} />
    </a>
  </Section>
);

export default TopBar;

const styles = {
  container: {
    ...flex({alignX: 'between', alignY: 'center'}),
    flexShrink: 0,
  },
  title: {
    fontFamily: fonts.family.title,
    fontSize: fonts.size.pageTitle,
  },
};
