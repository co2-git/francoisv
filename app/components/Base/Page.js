import React from 'react';

import Title from './Title';
import padding from '../../styles/mixins/padding';

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
    ...padding({horizontal: 16, vertical: 0, bottom: 60}),
  },
};
