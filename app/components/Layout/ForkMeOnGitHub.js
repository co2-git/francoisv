import React from 'react';

const ForkMeOnGitHub = () => (
  <a href="https://github.com/co2-git/francoisv" style={styles.ribbon}>
    Fork me on GitHub
  </a>
);

export default ForkMeOnGitHub;

const styles = {
  ribbon: {
    border: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    backgroundColor: '#999',
    color: 'white',
    textDecoration: 'none',
    padding: 5,
    // padding: '5px 40px',
    // transform: 'translate(40px, 20px) rotate(15deg)',
  },
};
