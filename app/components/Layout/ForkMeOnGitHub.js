import React from 'react';

import merge from '../../styles/mixins/merge';

const ForkMeOnGitHub = ({style}) => (
  <a
    href="https://github.com/co2-git/francoisv"
    style={merge(styles.ribbon, style)}
  >
    View source on GitHub
  </a>
);

export default ForkMeOnGitHub;

const styles = {
  ribbon: {
    border: 0,
    backgroundColor: '#999',
    color: 'white',
    textDecoration: 'none',
    padding: 5,
  },
};
