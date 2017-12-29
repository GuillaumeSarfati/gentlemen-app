export const row = {
  flex: 1,
  flexDirection: 'row',
};

function assignValueFromArguments(property, args) {
  switch (args.length) {
    case 1:
      return {
        [`${property}`]: args[0],
      };
    case 2:
      return {
        [`${property}Top`]: args[0],
        [`${property}Right`]: args[1],
        [`${property}Bottom`]: args[0],
        [`${property}Left`]: args[1],
      };
    case 4:
      return {
        [`${property}Top`]: args[0],
        [`${property}Right`]: args[1],
        [`${property}Bottom`]: args[2],
        [`${property}Left`]: args[3],
      };
    default: {
      return {};
    }
  }
}

export const debug = color => ({
  borderWidth: 3,
  borderColor: color,
});
export const flex = (direction, content, item) => ({
  flexDirection: direction,
  justifyContent: content,
  alignItems: item,
});

export function text(color, fontSize, align) {
  return {
    color,
    fontSize,
    textAlign: align,
  };
}

export function padding(top, right, bottom, left) {
  return assignValueFromArguments('padding', arguments);
}

export function font(size, weight, style) {
  let fontFamily = 'Karla';

  if (weight === 'bold') {
    if (style === 'italic') {
      fontFamily = 'Karla-BoldItalic';
    } else {
      fontFamily = 'Karla-Bold';
    }
  } else if (style === 'italic') {
    fontFamily = 'Karla-Italic';
  }
  return {
    fontSize: size,
    fontFamily,
  };
}

export function margin(top, right, bottom, left) {
  return assignValueFromArguments('margin', arguments);
}

export function background(color) {
  return {
    backgroundColor: color,
  };
}

export function borderBottom(width, style, color) {
  return {
    borderBottomWidth: width,
    borderStyle: style,
    borderBottomColor: color,
  };
}

export const border = (width, style, color, radius = 0) => ({
  borderWidth: width,
  borderStyle: style,
  borderColor: color,
  borderRadius: radius,
});
