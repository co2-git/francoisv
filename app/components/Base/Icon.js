// @flow

import React from 'react';

type TIconProps = {
  name: string,
  style?: Object,
};

const Icon = ({name, style}: TIconProps) => (
  <i className={`icon-${name}`} style={style} />
);

export default Icon;
