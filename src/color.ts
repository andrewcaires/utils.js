const between = (value: number) => Math.min(255, Math.max(0, value));

const parse = (color: string, percent: number) => between(parseInt(color, 16) + percent).toString(16);

export const shadeColor = (color: string, percent: number) => {

  return '#' + color.replace(/^#/, '').replace(/../g, (color) => ('0' + parse(color, percent)).substr(-2));
}
