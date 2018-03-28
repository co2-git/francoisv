// @flow

import React from 'react';

type TIconProps = {
  name: string,
  style?: Object,
};

const Icon = ({name, style, ...props}: TIconProps) => (
  <i className={`icon-${name}`} style={style} {...props} />
);

export default Icon;
