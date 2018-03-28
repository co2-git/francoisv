// @flow

type TStyleMixinFlexOptions = {
  direction?: 'column' | 'row',
};

type TStyleMixinFlex = {|
  alignItems: string,
  display: 'flex',
  flexDirection: 'column' | 'row',
  justifyContent: string,
|};

const flex = (options: TStyleMixinFlexOptions = {}): TStyleMixinFlex => {
  const {
    direction = 'row',
  } = options;
  let justifyContent = 'unset';
  let alignItems = 'unset';
  if (direction === 'row') {
    if (options.alignX === 'between') {
      justifyContent = 'space-between';
    }
    if (options.alignY === 'center') {
      alignItems = 'center';
    }
  }
  return {
    alignItems,
    display: 'flex',
    flexDirection: direction,
    justifyContent,
  };
};

export default flex;
