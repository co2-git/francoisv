const padding = (options = {}) => {
  let paddingTop = options.top || 0;
  let paddingRight = options.right || 0;
  let paddingBottom = options.bottom || 0;
  let paddingLeft = options.left || 0;

  if (options.vertical) {
    paddingTop = options.vertical;
    paddingBottom = options.vertical;
  }

  if (options.horizontal) {
    paddingRight = options.horizontal;
    paddingLeft = options.horizontal;
  }

  if (
    paddingTop === paddingBottom &&
    paddingTop === paddingLeft &&
    paddingLeft === paddingRight
  ) {
    return {padding: paddingTop};
  }

  if (paddingTop === paddingBottom && paddingRight === paddingLeft) {
    return {padding: `${paddingTop}px ${paddingRight}px`};
  }

  return {
    padding: `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px`,
  };
};

export default padding;
