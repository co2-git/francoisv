// @flow

type TStyleMixinFlexOptions = {
  direction?: 'column' | 'row',
};

type TStyleMixinFlex = {
  display: 'flex',
  flexDirection: 'column' | 'row',
};

const flex = (options: TStyleMixinFlexOptions = {}): TStyleMixinFlex => {
  const {
    direction = 'row',
  } = options;
  return {
    display: 'flex',
    flexDirection: direction,
  };
};

export default flex;
