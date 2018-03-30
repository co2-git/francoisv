// @flow

type TStyleMixinFlexOptions = {
  direction?: 'column' | 'row',
  alignY?: 'center',
  alignX?: 'between' | 'around' | 'center',
  wrap?: boolean | 'reverse',
};

type TStyleMixinFlex = {|
  alignItems: string,
  display: 'flex',
  flexDirection: 'column' | 'row',
  justifyContent: string,
  flexWrap: 'wrap' | 'unset',
|};

const flex = (options: TStyleMixinFlexOptions = {}): TStyleMixinFlex => {
  const {
    direction = 'row',
  } = options;
  let justifyContent = 'unset';
  let alignItems = 'unset';
  let flexWrap = 'unset';

  if (direction === 'row') {
    if (options.alignX === 'between') {
      justifyContent = 'space-between';
    }
    if (options.alignY === 'center') {
      alignItems = 'center';
    }
  }
  if (options.wrap) {
    flexWrap = 'wrap';
  }
  return {
    alignItems,
    display: 'flex',
    flexDirection: direction,
    justifyContent,
    flexWrap,
  };
};

export default flex;
