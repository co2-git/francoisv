const margin = (options = {}) => {
  let marginTop = 0;
  let marginRight = 0;
  let marginBottom = 0;
  let marginLeft = 0;

  if (options.vertical) {
    marginTop = options.vertical;
    marginBottom = options.vertical;
  }

  if (
    marginTop === marginBottom &&
    marginTop === marginLeft &&
    marginLeft === marginRight
  ) {
    return {margin: marginTop};
  }

  if (marginTop === marginBottom && marginRight === marginLeft) {
    return {margin: `${marginTop}px ${marginRight}px`};
  }

  return {
    margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px`,
  };
};

export default margin;
