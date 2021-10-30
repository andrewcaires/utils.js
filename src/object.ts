export const filterObject = (allowed: string[], raw: { [key: string]: any }): any => {

  return allowed.reduce((obj, key) => ({ ...obj, [key]: raw[key] }), {});
}
