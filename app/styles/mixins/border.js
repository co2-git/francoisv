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
  borderColor: string,
  borderStyle: TCSSBorderStyle,
  borderWidth: number,
};

const border = (options: TStyleMixinBorderOptions): TStyleMixinBorder => {
  const {
    color = 'black',
    style = 'solid',
    width = 1,
  } = options;
  return {
    borderColor: color,
    borderStyle: style,
    borderWidth: width,
  };
};

export default border;
