import React from 'react';

import Title from './Title';

const Page = ({children, title}) => (
  <section style={styles.container}>
    <Title>{title}</Title>
    {children}
  </section>
);

export default Page;

const styles = {
  container: {
    boxSizing: 'borderBox',
    padding: 16,
  },
};
