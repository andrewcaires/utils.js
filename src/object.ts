type objectRaw = { [key: string]: any };

export const allowedObject = (allowed: string[], raw: objectRaw): objectRaw => {

  return allowed.reduce((obj, key) => ({ ...obj, [key]: raw[key] }), {});
}
