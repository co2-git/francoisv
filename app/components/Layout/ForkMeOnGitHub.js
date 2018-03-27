import React from 'react';

const ForkMeOnGitHub = () => (
  <a href="https://github.com/co2-git/francoisv">
    <img
      style={styles.image}
      src="https://s3.amazonaws.com/github/ribbons/forkme_right_gray_6d6d6d.png"
      alt="Fork me on GitHub"
    />
  </a>
);

export default ForkMeOnGitHub;

const styles = {
  image: {
    border: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
};
