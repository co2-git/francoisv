import React from 'react';

const TopBar = () => (
  <section style={styles.container}>
    <a href="">Resumé</a>
    <a href="">Projects</a>
    <a href="">Posts</a>
    <a href="">Feed</a>
  </section>
);

export default TopBar;

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-around',
  },
};
