import React from 'react';

import merge from '../../styles/mixins/merge';
import title from '../../styles/mixins/title';

const Title = ({children, style, ...props}) => (
  <h1 style={merge(title(), style)} {...props}>{children}</h1>
);

export default Title;
