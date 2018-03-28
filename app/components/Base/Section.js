// @flow
import React from 'react';

import flex from '../../styles/mixins/flex';
import merge from '../../styles/mixins/merge';

type TSectionProps = {
  children: any,
  style?: Object,
};

const Section = ({children, style}: TSectionProps) => (
  <section style={merge(styles.container, style)}>
    {children}
  </section>
);

export default Section;

const styles = {
  container: {
    ...flex({direction: 'column'}),
    boxSizing: 'border-box',
  },
};
