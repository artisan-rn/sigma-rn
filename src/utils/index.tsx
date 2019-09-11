export const mergeStyle = (requiredStyle, customStyle, defaultStyle) => {
  let resultStyle = [requiredStyle];
  if (customStyle) {
    if (Array.isArray(customStyle)) {
      resultStyle = resultStyle.concat(customStyle);
    } else {
      resultStyle.push(customStyle);
    }
  } else {
    resultStyle.push(defaultStyle);
  }
  return resultStyle;
};
