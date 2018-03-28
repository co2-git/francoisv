// @flow

type TCSSBorderStyle =
  | 'solid'
  ;

type TStyleMixinBorderOptions = {
  color?: string,
  style?: TCSSBorderStyle,
  width?: number,
};

type TStyleMixinBorder = {
  borderColor?: string,
  borderStyle?: TCSSBorderStyle,
  borderWidth?: number,
  borderBottomColor?: string,
  borderBottomStyle?: TCSSBorderStyle,
  borderBottomWidth?: number,
};

type TBorderPrefix =
  | 'border'
  | 'borderBottom'
  ;

const border = (
  options: TStyleMixinBorderOptions,
  prefix: TBorderPrefix = 'border'
): TStyleMixinBorder => {
  const {
    color = 'black',
    style = 'solid',
    width = 1,
  } = options;
  return {
    [`${prefix}Color`]: color,
    [`${prefix}Style`]: style,
    [`${prefix}Width`]: width,
  };
};

border.bottom = (options: TStyleMixinBorderOptions): TStyleMixinBorder =>
  border(options, 'borderBottom');

export default border;
